package com.natwest.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.model.Bank;
import com.natwest.service.BankService;

@RestController
@RequestMapping("/api/bank")
//@CrossOrigin
public class BankController {

	@Autowired
	private BankService bankService;

	@PutMapping("/updatebank")
	public ResponseEntity<?> updateBank(@RequestBody Bank bank) {
		return new ResponseEntity<Bank>(bankService.updateBank(bank), HttpStatus.OK);
	}

	@GetMapping("/getbanks")
	public ResponseEntity<List<Bank>> getBanks() {
		return new ResponseEntity<List<Bank>>(bankService.getBanks(), HttpStatus.OK);
	}
	
	@GetMapping("/getbankbyaccountno")
	public ResponseEntity<?> getBankByAccountNo(@RequestParam long accountNo) {
		return new ResponseEntity<Bank>(bankService.getBankByAccountNo(accountNo), HttpStatus.OK);
	}
	
	@GetMapping("/getbankbyid")
	public ResponseEntity<?> getBankById(@RequestParam String customerId) {
		return new ResponseEntity<List<Bank>>(bankService.getBankById(customerId), HttpStatus.OK);
	}
}
