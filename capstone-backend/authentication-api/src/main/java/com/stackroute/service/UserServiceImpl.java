package com.stackroute.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.model.Customer;

import com.stackroute.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepo;

	public UserServiceImpl() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public Customer findByEmailAndPassword(String email, String password) {
		// TODO Auto-generated method stub
		return userRepo.findByEmailAndPassword(email, password);
	}

}
