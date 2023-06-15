import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  currentloggedincustomer: any = '';
  isLoaded = false;
  customer: Customer = new Customer();
  customers: Customer[] = [];
  currentcustomerid!:String;
  constructor(private customerService: CustomerService, private routingService:RoutingService) {

  }

  ngOnInit(): void {
    this.getCustomerById();
  }

  getCustomerById() {
    let customerlogin = this.routingService.getLoggedInCustomer();


        this.currentloggedincustomer = customerlogin;
        this.customerService.fetchcustomers().subscribe((res: Customer[]) => {
          this.customers = res;
          //console.log(this.customers);
          this.currentcustomerid = this.customers.filter(obj => obj.name === this.currentloggedincustomer)?.map(obj => obj.customerId)[0];
        this.customerService.fetchcustomerById(this.currentcustomerid).subscribe((res: Customer)=>{this.customer=res})

        });

  }






}
