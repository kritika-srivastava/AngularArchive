import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/app/models/bank';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { BankService } from 'src/app/services/bank.service';
import { RoutingService } from 'src/app/services/routing.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-added-banks',
  templateUrl: './view-added-banks.component.html',
  styleUrls: ['./view-added-banks.component.css']
})
export class ViewAddedBanksComponent implements OnInit {

  bank: Bank[]=[];
  isLoaded = false;
  currentloggedincustomer: any = '';

  customer:any;

  format(n: number) {
    return Intl.NumberFormat('en-US', { style: 'currency', currency: 'INR' }).format(n);
  }

  constructor(private bankService: BankService,
    private route: ActivatedRoute,
    private routingService: RoutingService,
    private customerService: CustomerService) { }


  ngOnInit(): void {

    this.currentloggedincustomer = this.routingService.getLoggedInCustomer();
    this.customerService.fetchcustomerByName(this.currentloggedincustomer).subscribe(res => {
      this.customer = res;
      this.bankService.fetchbanksById(this.customer.customerId).subscribe((res) => {
        this.bank = res;
        this.isLoaded = true;
      });

    });
  }

}
