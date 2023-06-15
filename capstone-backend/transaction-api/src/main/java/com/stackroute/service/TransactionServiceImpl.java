package com.stackroute.service;

import java.time.*;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.model.Transaction;
import com.stackroute.repository.TransactionRepository;

@Service
public class TransactionServiceImpl implements TransactionService {
	@Autowired
	private TransactionRepository transactionRepo;
	
	@Override
	public Transaction addtransaction(Transaction transaction)
	{
		transaction.setTrTimestamp(LocalDateTime.now().toString());
		//System.out.println(transaction.getTrTimestamp());
		Transaction temp=transactionRepo.save(transaction);
		return temp;

	}

	@Override
	public List<Transaction> fetchAllTransactionsByCustomerId (String customerId) {
		return transactionRepo.findByCustomerIdOrderByTrTimestampDesc(customerId);

	}

	

}
