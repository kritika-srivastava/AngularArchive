import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CustomerService } from './customer.service';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  accessLogin() {
    this.route.navigate(['login'])
  }

  accessSignup() {
    this.route.navigate(['signup'])
  }

  accessUserDetail(id: any) {
    this.route.navigate([`customerdetail/:${id}`])
  }
  accessDashboard() {
    this.route.navigate(['dashboard'])
  }

  goBack() {
    this.location.back();

  }
  getBanksList() {
    this.route.navigate([`viewbankdetail/:${this.getLoggedInCustomer()}`]);
  }

  makeTransactions() {
    this.route.navigate(['transfermoney']);
  }

  addBank() {
    this.route.navigate(['addbank']);
  }
  getLoggedInCustomer() {
    return sessionStorage.getItem("loginkey");
  }
  getTransactionHistory() {
    this.route.navigate([`transactions/:${this.getLoggedInCustomer()}`])
  }

  constructor(private route: Router, private location: Location) {
  }
}