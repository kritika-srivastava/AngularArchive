import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Bank } from 'src/app/models/bank';
import { Transaction } from 'src/app/models/transaction';
import { BankService } from 'src/app/services/bank.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RoutingService } from 'src/app/services/routing.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit {

  form!: FormGroup;
  bankaccount:Bank[]=[];
  errormsg = '';
  submitted = false;
  modes = ['Net Banking', 'Credit Card', 'Debit Card'];
  transaction: Transaction = new Transaction();
  tr: Transaction = new Transaction();
  transfer: Transaction = new Transaction();

  banks: Bank[] = []
  bank: Bank = new Bank();
  senderbank!: Bank;
  receiverbank!: Bank;
  bankr: Bank[] = [];
  bankss: Bank[] = [];
  isThere: boolean = false;
  isLoaded = false;
  senderBankId: any;

  addTrans() {
    let formInput: any[] = [];
    formInput.push(this.form.value);

    let currentloggedincustomer = this.routingService.getLoggedInCustomer();
    this.customerService.fetchcustomerByName(currentloggedincustomer).subscribe(res => {
      this.senderBankId = res.customerId;
    }, () => { }, () => {

      this.bankService.fetchbanksByAccountNo(parseInt(formInput[0].fromAccountNo))
        .subscribe((res) => { this.senderbank = res; },
          () => { },
          () => {
            //fetching bank by receiver ac number
            this.bankService.fetchbanksByAccountNo(parseInt(formInput[0].toAccountNo))
              .subscribe((res) => { this.receiverbank = res; },
                () => { },
                () => {
                  //console.log(this.receiverbank[0]);
                  //console.log(this.senderbank[0]);
                  this.validateInput(this.senderbank, this.receiverbank, formInput);
                });
          });
    });


  }

  validateInput(Banksender: Bank, Bankreceiver: Bank, val: any) {


    //reciver account not present

    if (Banksender==undefined) {
      alert('Wrong Sender Account Number');
    }
    else if (Bankreceiver==undefined) {
      alert('Wrong Beneficiary Account Number');
    }
    else {

      if (this.senderBankId !== Banksender.customerId) {
        alert('Sender bank account not added to customer ID');
      }
      else if (Bankreceiver.customerId == '') {
        alert('Beneficiary account not the member of this app.');
      }

      else if (Banksender.accountNo == Bankreceiver.accountNo) {
        alert('Beneficiary account number cannot be same as Sender account number.')
      }
      else {
        let valid = true;
        let sbank = Banksender;
        let rbank = Bankreceiver;
        //checking reciver IFSC code
        if (!val[0].IFSC.includes(rbank.ifsc)) {
          valid = false;
          alert('Incorrect Beneficiary Bank IFSC code')
        }
        //checking sender secretcode
        else if (!val[0].secretCode.includes(sbank.secretCode)) {
          valid = false;
          alert('Incorrect Secret Code.')
        }
        //checking sender have enough balance
        else if (val[0].amount.toString() > parseInt('0' + sbank.balance?.toString())) {
          valid = false;
          alert('Insufficient balance')
        }
        else {

        }
        if (valid) {
          //alert('Transfer complete');
          this.save(sbank, rbank, val[0]);
          this.form.reset();
        }

      }
    }
  }
  save(sbank: Bank, rbank: Bank, value: any) {

    let currentloggedincustomer = this.routingService.getLoggedInCustomer();

    //let d = new Date().toISOString().split('T')[0];
    let customerid: any;
    let customer2: any;

    this.customerService.fetchcustomerByName(currentloggedincustomer).subscribe(res => {
      let customer = res;
      //populating transaction for sender
      let tr = new Transaction();
      tr.customerId = customer.customerId;
      tr.fromAccountNo = value.fromAccountNo;
      tr.toAccountNo = value.toAccountNo;
      tr.amount = value.amount;
      tr.transactionMode = value.transactionMode;
      tr.transactionId = Math.floor((Math.random() * 1000000) + 1000000);
      //tr.trTimestamp = d;

      customerid = tr.customerId;

      this.transactionService.addTransaction(tr).subscribe((res) => {
      }, () => { }, () => {

        //adding transfer amount to receiver bank
        rbank.balance = rbank.balance + value.amount;
        //removing transfer amount from sender bank
        sbank.balance = parseInt('0' + sbank.balance?.toString()) - value.amount;

        //updating receiver bank
        this.bankService.updateBank(rbank).subscribe();
        //updating sender bank
        this.bankService.updateBank(sbank).subscribe(res => { });

        this.bankService.fetchbanksByAccountNo(rbank.accountNo)
          .subscribe((res: any) => {
            customer2 = res;
          }, () => { }, () => {
            let trr = new Transaction();

            trr.fromAccountNo = value.fromAccountNo;
            trr.toAccountNo = value.toAccountNo;
            trr.amount = value.amount;
            trr.customerId = customer2.customerId;
            trr.transactionMode = value.transactionMode;
            trr.transactionId = Math.floor((Math.random() * 1000000) + 1000000);
            //trr.TrTimestamp = d;

            //console.log(trr.customerId + " " + customerid);

            if (trr.customerId === customerid) { }
            else {
              this.transactionService.addTransaction(trr).subscribe(res => { });
            }
            alert('Transaction successful');
          });
        //populating transaction for receiver


      });

    });

  }

  get f() {
    return this.form.controls;
  }

  constructor(private customerService: CustomerService, private transactionService: TransactionService, private routingService: RoutingService, private bankService: BankService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      fromAccountNo: new FormControl('', [Validators.required, Validators.minLength(10)]),
      toAccountNo: new FormControl('', [Validators.required, Validators.minLength(10)]),
      transactionMode: new FormControl('', [Validators.required]),
      IFSC: new FormControl('', [Validators.required, Validators.minLength(8)]),
      secretCode: new FormControl('', [Validators.required, Validators.minLength(6)]),
      amount: new FormControl('', [Validators.required, Validators.min(1)])

    });

    let currentloggedincustomer = this.routingService.getLoggedInCustomer();
    this.customerService.fetchcustomerByName(currentloggedincustomer).subscribe(res => {
      let customer = res;
      this.bankService.fetchbanksById(customer.customerId).subscribe((res) => {
        this.bankaccount = res;
        this.isLoaded = true;
      });
    });


  }
}




