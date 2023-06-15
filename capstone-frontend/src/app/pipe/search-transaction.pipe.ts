import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../models/transaction';


@Pipe({
  name: 'searchTransaction'
})
export class SearchTransactionPipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/
  transform(transaction: Transaction[], searchText: any): Transaction[] {
    if (Array.isArray(transaction)) {
      return transaction.filter(obj => {
        return obj.transactionId?.toString().includes(searchText) ||
          obj.fromAccountNo?.toString().includes(searchText) ||
          obj.toAccountNo?.toString().includes(searchText) ||
          obj.transactionMode?.toString().includes(searchText) ||
          obj.trTimestamp?.toString().includes(searchText) ||
          obj.amount?.toString().includes(searchText);
      });
    }
    else
      return [];

  }

}
