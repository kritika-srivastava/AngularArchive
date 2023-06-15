package com.stackroute.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.exceptions.CustomerAlreadyExists;
import com.stackroute.exceptions.CustomerNotExists;
import com.stackroute.model.Customer;
import com.stackroute.service.CustomerService;

@RestController
@RequestMapping("/api/customer")
//@CrossOrigin("http://localhost:4200")
public class CustomerController {

	@Autowired
	private CustomerService customerService;

	@GetMapping("/getcustomers")
	public ResponseEntity<List<Customer>> getcustomers() {
		return new ResponseEntity<List<Customer>>(customerService.listOfCustomers(), HttpStatus.OK);
	}

	@PostMapping("/addCustomer")
	public ResponseEntity<?> addCustomer(@RequestBody Customer customer) {
		try {
			return new ResponseEntity<Customer>(customerService.addCustomer(customer), HttpStatus.CREATED);
		} catch (CustomerAlreadyExists e) {
			// TODO Auto-generated catch block
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.CONFLICT);
		}
	}

	@GetMapping("/getCustomerbyId")
	public ResponseEntity<?> getCustomerByCustomerId(@RequestParam String customerId) {
		try {
			return new ResponseEntity<Customer>(customerService.getCustomerById(customerId), HttpStatus.OK);
		} catch (CustomerNotExists e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.CONFLICT);
		}
	}

	@GetMapping("/getCustomerbyName")
	public ResponseEntity<?> getCustomerByCustomerName(@RequestParam String name) {

		return new ResponseEntity<Customer>(customerService.getCustomerByName(name), HttpStatus.OK);

	}

}
