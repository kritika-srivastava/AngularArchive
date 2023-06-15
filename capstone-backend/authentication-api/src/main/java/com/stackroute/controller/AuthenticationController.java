package com.stackroute.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.model.Customer;

import com.stackroute.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
//@CrossOrigin("http://localhost:4200")
public class AuthenticationController {
	
	@Autowired
	private UserService userService;

	static final long EXPIRY_TIME=1000*60*60;
	
	Map<String, String> mymap = new HashMap<>();
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Customer user) {
		String jwtToken;
		try {
			jwtToken=generateToken(user.getEmail(),user.getPassword());
			mymap.clear();
			mymap.put("message", "User successfully logged in");
			mymap.put("token", jwtToken);
			return new ResponseEntity<>(mymap,HttpStatus.OK);
		} catch (ServletException e) {
			mymap.clear();
			mymap.put("message", e.getMessage());
			mymap.put("token", null);
			return new ResponseEntity<>(mymap,HttpStatus.UNAUTHORIZED);
		}		
	}
	
	public String generateToken(String email, String password) throws ServletException {
		
		if(email==null || password==null) {
			throw new ServletException("Please add the valid details");
		}
		
		Customer obj = userService.findByEmailAndPassword(email, password);
		if(obj==null) {
			throw new ServletException("Username or password incorrect");
		}
		//token
		String token = Jwts.builder()
							.setSubject(email)
							.setIssuedAt(new Date())
							.setExpiration(new Date(System.currentTimeMillis()+EXPIRY_TIME))
							.signWith(SignatureAlgorithm.HS256, "mysecretkey")
							.compact();
		return token;
							
		
	}

}
