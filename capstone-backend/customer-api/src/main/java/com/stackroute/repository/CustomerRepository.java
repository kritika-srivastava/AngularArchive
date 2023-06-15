package com.stackroute.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.stackroute.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {
	
	public Customer findByNameAndPassword(String name, String password);
	public Customer findByName(String name);

}
