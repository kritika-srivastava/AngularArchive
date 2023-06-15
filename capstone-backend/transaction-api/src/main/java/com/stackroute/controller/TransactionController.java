package com.stackroute.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.model.Transaction;
import com.stackroute.service.TransactionService;

@RestController
@RequestMapping("/api/transaction")
//@CrossOrigin
public class TransactionController {
	@Autowired
	private TransactionService transactionService;
	
	@PostMapping("/addtransaction")
	public ResponseEntity<?> addtransaction(@RequestBody Transaction transaction) {
	
			return new ResponseEntity<Transaction>(transactionService.addtransaction(transaction),HttpStatus.CREATED);
		
	}
	@GetMapping("/gettransaction")
	public ResponseEntity<List<Transaction>> fetchAllTransactionsByCustomerId(@RequestParam String customerId) {
			return new ResponseEntity<List<Transaction>>(transactionService.fetchAllTransactionsByCustomerId(customerId), HttpStatus.OK);

	}


}
