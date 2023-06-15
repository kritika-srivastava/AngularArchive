import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentloggedincustomer: any = '';
  currentcustomerid!: string;
  customers: Customer[] = [];

  login() {

    this.routingService.accessLogin();
  }

  SignUp() {
    this.routingService.accessSignup();
  }

  getId() {
    return this.customers.filter(obj => obj.name === this.currentloggedincustomer)?.map(obj => obj.customerId)[0]
  }

  getUser() {
    this.userDetail(this.getId());
  }
  dashboard() {
    this.routingService.accessDashboard();
  }
  userDetail(id: any) {
    this.routingService.accessUserDetail(id);
  }

  logout() {
    sessionStorage.clear();
    alert('Logout Successful');
    this.routingService.accessLogin();

  }
  Login:Boolean= false;
  constructor(private routingService: RoutingService, private customerService: CustomerService) {
  }
  ngOnInit(): void {
    while (!this.Login) {
      setTimeout(() => { this.ngOnInit() }, 100 * 10);
      this.Login = true;
      let customerlogin = this.routingService.getLoggedInCustomer();
      if (this.currentloggedincustomer != customerlogin) {
        this.currentloggedincustomer = customerlogin;
        this.customerService.fetchcustomers().subscribe((res: Customer[]) => {
          this.customers = res;
          //console.log(this.customers);
          this.currentcustomerid = this.customers.filter(obj => obj.name === this.currentloggedincustomer)?.map(obj => obj.customerId)[0];
        });
      }
    }
  }

}
