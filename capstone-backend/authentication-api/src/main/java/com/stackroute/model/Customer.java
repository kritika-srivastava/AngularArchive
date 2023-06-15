package com.stackroute.model;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Customer {
	
	@Id
	private String email;
	private String password;
	private String name;
	private String phone;
	private String customerId;
	
	
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}

	
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Customer(String email, String password, String name, String phone, String city, String customerId) {
		this.customerId = customerId;
		this.password = password;
		this.name = name;
		this.phone = phone;
		this.email = email;
	}
	@Override
	public String toString() {
		return "Customer[email=" + email + ", password=" + password + ", name=" + name + ", phone=" + phone
				+ ", customerId=" + customerId +  "]";
	}

}

