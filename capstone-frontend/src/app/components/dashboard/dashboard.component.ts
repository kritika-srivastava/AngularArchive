import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  reloadPage() {
    window.location.reload()
  }

  constructor(private routingService: RoutingService) {

  }

  addBank() {
    this.routingService.addBank();
  }

  viewBanks() {
    this.routingService.getBanksList();
  }

  transactions() {
    this.routingService.makeTransactions();
  }

  transactionHistory() {
    this.routingService.getTransactionHistory();
  }
  

  ngOnInit(): void {

  }

}
