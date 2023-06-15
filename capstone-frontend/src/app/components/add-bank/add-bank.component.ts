import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { Bank } from 'src/app/models/bank';
import { Customer } from 'src/app/models/customer';
import { RoutingService } from 'src/app/services/routing.service';
import { Validation } from './validation';
import { BankService } from 'src/app/services/bank.service';
import { delay } from 'rxjs';
import { ASTWithSource } from '@angular/compiler';
import { async } from '@angular/core/testing';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  errormessage = '';
  isLoaded = false;
  selectedBank?: string;
  cardType = '';
  cardNo!: any;

  banks = ['NatWest', 'Coutts', 'SBI']
  Bank!: Bank;
  cards = ['Credit', 'Debit']

  addBank() {
    if (this.form.invalid) {
      return;
    }
    else {
      let formInput: any[] = [];
      formInput.push(this.form.value);
      //console.log(formInput[0].secretCode);
      this.bankService.fetchbanksByAccountNo(parseInt(formInput[0].accountNo))
        .subscribe((res) => {
          this.Bank = res;
        },
          () => { },
          () => {
            this.validateInput(this.Bank, formInput);
          });


    }
  }
  validateInput(Bank: Bank, val: any) {
    if (Bank==undefined) {
      alert('Wrong Account Number');

    }
    else {
      let valid = true;
      let bank = Bank;
    
     
      if (val[0].name !== bank.name) {
        valid = false;
        alert('Wrong Name');
      }
      else if (val[0].selectedBank != bank.bankName) {
        valid = false;
        alert(`Bank account does not exist in ${val[0].selectedBank} Bank`)
      }
      else if (!val[0].IFSC.includes(bank.ifsc)) {
        valid = false;
        alert('Wrong IFSC Code.');
      }
      else if (val[0].cardType === 'Credit') {

        if (parseInt(val[0].cardNo) != bank.creditCard) {
          valid = false;
          alert('Wrong Credit card number or wrong card type selected.');
        }
        else { }
      }
      else if (val[0].cardType === 'Debit') {

        if (parseInt(val[0].cardNo) != bank.debitCard) {
          valid = false;
          alert('Wrong Debit card number or wrong card type selected.');
        } else { }
      }
      else if(bank.secretCode!=''){
        alert('Bank account belongs to different customer.')
        valid=false;
      }

      if (valid) {
        this.saveDetails(bank, val[0]);
      }

    }
  }


  saveDetails(bank: Bank, value: any) {

    let currentloggedincustomer = this.routingService.getLoggedInCustomer();
    this.customerService.fetchcustomerByName(currentloggedincustomer).subscribe(res => {
      let customer = res;
      //console.log(customer);
      bank.customerId = customer.customerId;
      bank.secretCode = value.secretCode;
      //console.log("Final Details")
      //console.log(bank);

      this.bankService.updateBank(bank).subscribe((res: any) => { alert('Bank Details successfully linked.'); });
      this.form.reset();
    });
  }

  selectCardType(value: string) {
    this.cardType = value;
  }

  get f() {
    return this.form.controls;
  }


  constructor(private bankService: BankService, private customerService: CustomerService, private routingService: RoutingService) {
  }


  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      accountNo: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      IFSC: new FormControl('', [Validators.required]),
      cardNo: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{12}$")]),
      cardType: new FormControl(''),
      secretCode: new FormControl('', [Validators.required, Validators.minLength(6)]),
      selectedBank: new FormControl('')
    })
  }


}

