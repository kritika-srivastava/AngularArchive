import { LoginComponent } from "../components/login/login.component";

export class Bank {

    bankName?: string; //Create list during input
    name?: string;
    email?: string;
    creditCard?: number; //12 digits
    debitCard?: number; //12 digits
    balance?: number;
    phone?: string; //10 digits
    accountNo?: number; //10 digits
    ifsc?: string; // 8alphabets
    secretCode?: string; //6 digits
    customerId?: string;
}
