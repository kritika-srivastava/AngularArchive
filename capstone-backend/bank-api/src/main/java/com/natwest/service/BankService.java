package com.natwest.service;

import java.util.List;

import com.natwest.model.Bank;

public interface BankService {

	public Bank updateBank(Bank bank);

	public List<Bank> getBanks();

	public List<Bank> getBankById(String customerId);

	public Bank getBankByAccountNo(long accountno);

}
