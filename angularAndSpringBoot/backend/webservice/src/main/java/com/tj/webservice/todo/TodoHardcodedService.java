package com.tj.webservice.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {

	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "tj", "Learn something cool", new Date(), false));
		todos.add(new Todo(++idCounter, "tj", "Learn something cooler", new Date(), false));
		todos.add(new Todo(++idCounter, "tj", "Eat wings", new Date(), false));
	}
	
	public List<Todo> findAll() {
		return todos;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if (todo == null) return null;
		
		todos.remove(todo);
		
		return todo;
	}

	public Todo findById(long id) {
		for (Todo todo:todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
}
