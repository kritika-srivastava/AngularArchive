import { HttpClient, HttpErrorResponse,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bank } from '../models/bank';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankService {


  addBank(bank: Bank): Observable<Bank> {
    let header = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    let options = {
      headers: header
    }
    //console.log(this.headers,"hi")
    return this.http.post<Bank>(`${environment.bankurl}/updatebank`, bank, options)
      .pipe(catchError(this.handleError));
  }

  fetchAllBanks(): Observable<Bank[]> {
    let header = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    let options = {
      headers: header
    }
    return this.http.get<Bank[]>(`${environment.bankurl}/getbanks`, options)
      .pipe(catchError(this.handleError));

  }


  fetchbanksById(id: any): Observable<Bank[]> {

    let header = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    let options = {
      headers: header
    }
    //console.log(options);
    return this.http.get<Bank[]>(`${environment.bankurl}/getbankbyid?customerId=${id}`, options)
      .pipe(catchError(this.handleError));
  }

  fetchbanksByAccountNo(account: any): Observable<Bank> {
    let header = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    let options = {
      headers: header
    }
    return this.http.get<Bank>(`${environment.bankurl}/getbankbyaccountno?accountNo=${account}`, options)
      .pipe(catchError(this.handleError));
  }


  updateBank(bank: Bank): Observable<Bank> {
    let header = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    let options = {
      headers: header
    }
    return this.http.put(`${environment.bankurl}/updatebank`, bank, options)
      .pipe(catchError(this.handleError));
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
  constructor(private http: HttpClient) {

  }

}
