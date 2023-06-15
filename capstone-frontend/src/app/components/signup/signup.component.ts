import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { RoutingService } from 'src/app/services/routing.service';
import { Validation } from './validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  customer: Customer = new Customer();
  errormsg = '';
  customerslist: Customer[] = [];
  addCustomer() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    else {
      this.customer.name = this.form.get('name')?.value.toString();
      this.customer.email = this.form.get('email')?.value.toString();
      this.customer.phone = this.form.get('phone')?.value.toString();
      this.customer.password = this.form.get('password')?.value.toString();
      this.customer.customerId = 'APP' + ((parseInt(this.customerslist[this.customerslist.length - 1].customerId.slice(3))) + 1).toString();
      //console.log(this.customerslist.length);
      //console.log(this.customer);
      this.customerService.addCustomer(this.customer)
        .subscribe(
          {
            next: res => {
              alert('customer added: ' + res.name);
              this.form.reset();
              this.routingService.accessLogin();
            },
            error: error => this.errormsg = error
          });
    }
  }

  get f() {
    return this.form.controls;
  }
  login() {
    this.routingService.accessLogin();
  }
  constructor(private customerService: CustomerService, private routingService: RoutingService) {
    this.customerService.fetchcustomers()
      .subscribe(

        (res) => { this.customerslist = res; }
      );
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl('', [Validators.required,Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{7,12}$')]),
      confirmpassword: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])

    }, { validators: [Validation.match('password', 'confirmpassword')] })
  }

}
