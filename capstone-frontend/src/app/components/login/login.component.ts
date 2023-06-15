

import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { RoutingService } from 'src/app/services/routing.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customerlist: Customer[] = []
  message = '';

  login(input: any, password: any) {

    const customer = this.customerlist.find(obj =>
      (obj.email === input || obj.phone === input) && obj.password === password)

    if (customer != null) {
     
      this.customerService.authenticate(input, password).subscribe((response: any) => {
        sessionStorage.setItem("token",response.token);
        if(response.token==null)
        {
          alert("Error")
        }
        else{
           alert('Login Successful');
      sessionStorage.setItem("loginkey", customer.name);
      //console.log(sessionStorage.getItem("loginkey"));
   
      this.routingService.accessDashboard();
        }
    });
      //window.location.reload();
    }
    else {
      this.message = "Incorrect login credential or password";
    }
  }

  SignUp() {
    this.routingService.accessSignup();
  }
  constructor(private customerService: CustomerService, private routingService: RoutingService) { }

  ngOnInit(): void {
    this.customerService.fetchcustomers().subscribe(res => this.customerlist = res);
  }

}
