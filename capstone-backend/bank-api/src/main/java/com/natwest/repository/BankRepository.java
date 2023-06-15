package com.natwest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.natwest.model.Bank;

@Repository
public interface BankRepository extends JpaRepository<Bank, Long>{

	public Bank findByAccountNo(long accountNo);	
	public List<Bank> findByCustomerId(String customerId);
}
	