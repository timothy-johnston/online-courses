package com.tj.webservice.helloworld;

import java.io.Serializable;

public class HelloWorldBean implements Serializable {

	private String message;

	public HelloWorldBean(String message) {
		this.message = message;
	}

	public HelloWorldBean() {
		// TODO Auto-generated constructor stub
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}
	
	
	
}
