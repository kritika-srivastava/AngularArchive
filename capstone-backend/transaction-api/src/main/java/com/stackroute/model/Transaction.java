package com.stackroute.model;

import javax.persistence.Entity;
import javax.persistence.Id;



//import org.springframework.stereotype.Component;

@Entity
public class Transaction {
	
	@Id
	private String transactionId;
    private String toAccountNo;
   private long fromAccountNo ;
    private String transactionMode ;
   private long amount;
    private String trTimestamp;
   private String customerId;
public Transaction() {
	super();
	// TODO Auto-generated constructor stub
}
public Transaction(String transactionId, String toAccountNo, long fromAccountNo, String transactionMode, long amount,
		String trTimestamp, String customerId) {
	super();
	this.transactionId = transactionId;
	this.toAccountNo = toAccountNo;
	this.fromAccountNo = fromAccountNo;
	this.transactionMode = transactionMode;
	this.amount = amount;
	this.trTimestamp = trTimestamp;
	this.customerId = customerId;
}
public String getTransactionId() {
	return transactionId;
}
public void setTransactionId(String transactionId) {
	this.transactionId = transactionId;
}
public String getToAccountNo() {
	return toAccountNo;
}
public void setToAccountNo(String toAccountNo) {
	this.toAccountNo = toAccountNo;
}
public long getFromAccountNo() {
	return fromAccountNo;
}
public void setFromAccountNo(long fromAccountNo) {
	this.fromAccountNo = fromAccountNo;
}
public String getTransactionMode() {
	return transactionMode;
}
public void setTransactionMode(String transactionMode) {
	this.transactionMode = transactionMode;
}
public long getAmount() {
	return amount;
}
public void setAmount(long amount) {
	this.amount = amount;
}
public String getTrTimestamp() {
	return this.trTimestamp;
}
public void setTrTimestamp(String trTimestamp) {
	this.trTimestamp = trTimestamp;
}
public String getCustomerId() {
	return customerId;
}
public void setCustomerId(String customerId) {
	this.customerId = customerId;
}

   
	
}
