package com.stackroute.service;
import java.util.List;

import com.stackroute.model.Transaction;
public interface TransactionService {
	
	public Transaction addtransaction(Transaction transaction);
	public List<Transaction>  fetchAllTransactionsByCustomerId(String customerId);
	
}
