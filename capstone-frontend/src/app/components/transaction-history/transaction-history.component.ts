import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { Customer } from 'src/app/models/customer';
import { TransactionService } from 'src/app/services/transaction.service';
import { RoutingService } from 'src/app/services/routing.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  trxArray: Transaction[] = [];
  currentloggedincustomer: any = ''
  trxId = ''
  customer!: Customer;
  isLoaded = false;


  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  getAllTransactions() {
    this.currentloggedincustomer = this.routingService.getLoggedInCustomer();
    this.customerService.fetchcustomerByName(this.currentloggedincustomer).subscribe(res => {
      this.customer = res;


      this.transactionService.fetchAllTransactionsByCustomerId(this.customer.customerId).subscribe((res) => {
        this.trxArray = res;
        this.dtTrigger.next(this.trxArray);
        this.isLoaded = true;
      });

    });
  }

  constructor(private transactionService: TransactionService, private routingService: RoutingService, private customerService: CustomerService) { }
  ngOnInit(): void {
    this.getAllTransactions();
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}

