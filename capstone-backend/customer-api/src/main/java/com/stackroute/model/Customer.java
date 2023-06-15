package com.stackroute.model;
import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Customer {
	
	@Id
	private String customerId;
	private String name;
	private String password;
	private String phone;
	private String email;
	
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Customer(String customerId, String name, String password, String phone, String email) {
		super();
		this.customerId = customerId;
		this.name = name;
		this.password = password;
		this.phone = phone;
		this.email = email;
	}
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	


}
