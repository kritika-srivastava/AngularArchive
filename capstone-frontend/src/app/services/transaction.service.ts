import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Transaction } from '../models/transaction';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  addTransaction(transaction: Transaction): Observable<Transaction> {
    let header = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    let options = {
      headers: header
    }
    return this.http.post<Transaction>(`${environment.transactionurl}/addtransaction`, transaction, options)
      .pipe(catchError(this.handleError));
  }

  fetchAllTransactionsByCustomerId(customerId: any): Observable<Transaction[]> {
    let header = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
    let options = {
      headers: header
    }
    return this.http.get<Transaction[]>(`${environment.transactionurl}/gettransaction?customerId=${customerId}`, options)
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
