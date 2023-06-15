export class Transaction {
    transactionId?: number; //7 digits
    fromAccountNo?: number; //10 digits
    toAccountNo?: number; // 10 digits
    trTimestamp?: string;
    amount?: number;
    transactionMode?: string;
    customerId?: string; //8 character
}
