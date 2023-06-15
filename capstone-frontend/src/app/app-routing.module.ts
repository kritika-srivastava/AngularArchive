import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { ViewAddedBanksComponent } from './components/view-added-banks/view-added-banks.component';
import { AddBankComponent } from './components/add-bank/add-bank.component';
import { TransferMoneyComponent } from './components/transfer-money/transfer-money.component';
import { AuthenticationGuard } from './authguard/authentication.guard';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'customerdetail/:customerId', component: CustomerDetailsComponent, canActivate: [AuthenticationGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard] },
  { path: 'transactions/:name', component: TransactionHistoryComponent, canActivate: [AuthenticationGuard] },
  { path: 'addbank', component: AddBankComponent, canActivate: [AuthenticationGuard] },
  { path: 'transfermoney', component: TransferMoneyComponent, canActivate: [AuthenticationGuard] },
  { path: 'viewbankdetail/:name', component: ViewAddedBanksComponent, canActivate: [AuthenticationGuard] },
  { path: '', redirectTo:'/login',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
