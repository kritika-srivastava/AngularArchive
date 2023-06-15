package com.natwest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.natwest.model.Bank;
import com.natwest.repository.BankRepository;

@Service
public class BankServiceImpl implements BankService {

	@Autowired
	private BankRepository bankRepo;

	@Override
	public Bank updateBank(Bank bank) {
		Bank resBank = bankRepo.save(bank);
		return resBank;
	}

	@Override
	public List<Bank> getBanks() {
		List<Bank> bankList = bankRepo.findAll();
		return bankList;
	}

	@Override
	public List<Bank> getBankById(@RequestParam String customerId) {
		return bankRepo.findByCustomerId(customerId);
	}

	@Override
	public Bank getBankByAccountNo(long accountNo) {
		return bankRepo.findByAccountNo(accountNo);
	}

}
