package com.stackroute.repository;
import com.stackroute.model.Transaction;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

	public List<Transaction> findByCustomerIdOrderByTrTimestampDesc(String customerId);
}
