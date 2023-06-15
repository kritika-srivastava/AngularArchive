import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddBankComponent } from './components/add-bank/add-bank.component';
import { TransferMoneyComponent } from './components/transfer-money/transfer-money.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewAddedBanksComponent } from './components/view-added-banks/view-added-banks.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchTransactionPipe } from './pipe/search-transaction.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddBankComponent,
    TransferMoneyComponent,
    CustomerDetailsComponent,
    TransactionHistoryComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ViewAddedBanksComponent,
    SearchTransactionPipe,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
