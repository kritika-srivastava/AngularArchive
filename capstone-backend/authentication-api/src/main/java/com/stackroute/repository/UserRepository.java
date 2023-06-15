package com.stackroute.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.model.Customer;


@Repository
public interface UserRepository extends CrudRepository<Customer, String> {
	
	//select user from user where username=? and password=?;
	public Customer findByEmailAndPassword(String email, String password);

}
