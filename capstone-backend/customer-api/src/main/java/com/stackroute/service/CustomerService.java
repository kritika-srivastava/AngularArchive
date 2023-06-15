package com.stackroute.service;

import java.util.List;

import com.stackroute.exceptions.CustomerAlreadyExists;
import com.stackroute.exceptions.CustomerNotExists;
import com.stackroute.model.Customer;


public interface CustomerService {
	
	public Customer addCustomer(Customer customer) throws CustomerAlreadyExists;
	public List<Customer> listOfCustomers();
	public Customer getCustomerById(String customerId) throws CustomerNotExists;
	public Customer updateCustomer(Customer customer) throws CustomerNotExists;
	public void deleteCustomer(String customerId) throws CustomerNotExists;
	public Customer getCustomerByName(String name)	;
	//fetch the user according to the username and password
	public Customer findByNameAndPassword(String name, String password);

}
