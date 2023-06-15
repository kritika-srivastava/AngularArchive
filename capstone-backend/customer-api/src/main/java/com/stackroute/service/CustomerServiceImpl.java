package com.stackroute.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.exceptions.CustomerAlreadyExists;
import com.stackroute.exceptions.CustomerNotExists;
import com.stackroute.model.Customer;
import com.stackroute.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepo;

	@Override
	public Customer addCustomer(Customer customer) throws CustomerAlreadyExists {
		// TODO Auto-generated method stub
		Optional<Customer> optionalCustomer = customerRepo.findById(customer.getCustomerId());

		if (optionalCustomer.isPresent()) {
			throw new CustomerAlreadyExists("This user already exists in the database");
		} else {
			Customer temp = customerRepo.save(customer);
			return temp;
		}
	}

	@Override
	public List<Customer> listOfCustomers() {
		// TODO Auto-generated method stub
		List<Customer> customerlist = customerRepo.findAll();
		return customerlist;

	}

	@Override
	public Customer getCustomerById(String customerId) throws CustomerNotExists {
		// TODO Auto-generated method stub
		Optional<Customer> optionalCustomer = customerRepo.findById(customerId);
		if (optionalCustomer.isPresent()) {
			return optionalCustomer.get();
		} else {
			throw new CustomerNotExists("Sorry, the id entered does not exist");
		}

	}

	@Override
	public Customer updateCustomer(Customer customer) throws CustomerNotExists {
		// TODO Auto-generated method stub
		Optional<Customer> optionalCustomer = customerRepo.findById(customer.getCustomerId());
		if (optionalCustomer.isEmpty()) {
			throw new CustomerNotExists("User does not exist so update not possible");
		} else {
			return customerRepo.save(customer);
		}

	}

	@Override
	public void deleteCustomer(String customerId) throws CustomerNotExists {
		// TODO Auto-generated method stub
		Optional<Customer> optionalCustomer = customerRepo.findById(customerId);
		if (optionalCustomer.isPresent()) {
			customerRepo.deleteById(customerId);
		} else {
			throw new CustomerNotExists("Sorry, delete not possible as username not exist");
		}

	}

	public Customer getCustomerByName(String name) {

		return customerRepo.findByName(name);

	}

	@Override
	public Customer findByNameAndPassword(String name, String password) {
		// TODO Auto-generated method stub
		return customerRepo.findByNameAndPassword(name, password);
	}

}
