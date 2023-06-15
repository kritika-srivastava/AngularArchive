import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private routingService: RoutingService) { }

  dashboard() {
    this.routingService.accessDashboard();
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
