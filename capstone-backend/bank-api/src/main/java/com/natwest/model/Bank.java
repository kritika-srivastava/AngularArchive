package com.natwest.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Bank {
	
	
	@Id
	private long accountNo; // 10 digits
	
	private String bankName; // Create list during input
	private String name;
	private String email;
	private long creditCard; // 12 digits
	private long debitCard; // 12 digits
	private long balance;
	private String phone; // 10 digits
	private String ifsc; // 8alphabets
	private String secretCode; // 6 digits
	private String customerId;
	public long getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(long accountNo) {
		this.accountNo = accountNo;
	}
	public String getBankName() {
		return bankName;
	}
	public void setBankName(String bankName) {
		this.bankName = bankName;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getCreditCard() {
		return creditCard;
	}
	public void setCreditCard(long creditCard) {
		this.creditCard = creditCard;
	}
	public long getDebitCard() {
		return debitCard;
	}
	public void setDebitCard(long debitCard) {
		this.debitCard = debitCard;
	}
	public long getBalance() {
		return balance;
	}
	public void setBalance(long balance) {
		this.balance = balance;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getIfsc() {
		return ifsc;
	}
	public void setIfsc(String ifsc) {
		this.ifsc = ifsc;
	}
	public String getSecretCode() {
		return secretCode;
	}
	public void setSecretCode(String secretCode) {
		this.secretCode = secretCode;
	}
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public Bank(long accountNo, String bankName, String name, String email, long creditCard, long debitCard,
			long balance, String phone, String ifsc, String secretCode, String customerId) {
		super();
		this.accountNo = accountNo;
		this.bankName = bankName;
		this.name = name;
		this.email = email;
		this.creditCard = creditCard;
		this.debitCard = debitCard;
		this.balance = balance;
		this.phone = phone;
		this.ifsc = ifsc;
		this.secretCode = secretCode;
		this.customerId = customerId;
	}
	public Bank() {
		super();
		// TODO Auto-generated constructor stub
	}
		

	
		
}
