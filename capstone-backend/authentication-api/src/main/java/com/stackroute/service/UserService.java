package com.stackroute.service;

import com.stackroute.model.Customer;


public interface UserService {
	
	public Customer findByEmailAndPassword(String email, String password);

}
