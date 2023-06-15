import { HttpClient, HttpErrorResponse, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs'
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  loginData:Customer=new Customer();
headers:any;
  //implemented
  addCustomer(customer: Customer): Observable<Customer> {
    //console.log(customer);
    return this.http.post<Customer>(`${environment.customerurl}/addCustomer`, customer)
      .pipe(catchError(this.handleError));

  }

  //implemented
  fetchcustomers(): Observable<Customer[]> {

    return this.http.get<Customer[]>(`${environment.customerurl}/getcustomers`)
      .pipe(catchError(this.handleError));
  }

  authenticate(email:any, password:any) {

    this.loginData.email=email;
    this.loginData.password=password;

    //console.log(this.loginData);
    return this.http.post<any>(`${environment.authenticationurl}/login`,this.loginData)
  }


  fetchcustomerById(id: any): Observable<Customer> {

    return this.http.get<Customer>(`${environment.customerurl}/getCustomerbyId?customerId=${id}`)
      .pipe(catchError(this.handleError));
  }

  fetchcustomerByName(name: any): Observable<Customer> {

    return this.http.get<Customer>(`${environment.customerurl}/getCustomerbyName?name=${name}`)
      .pipe(catchError(this.handleError))
      ;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log("Error occured, please try after sometime" + error.statusText);
    }
    else {
      console.log("Error occured");

    }
    return throwError(() => new Error("Request cannot be processed, try again after some time"));

  }
  constructor(private http: HttpClient ) {
    this.headers = new Headers();
this.headers.append('Authorization',`Bearer ${sessionStorage.getItem('token')}`);
  }
}
