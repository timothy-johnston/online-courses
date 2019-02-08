import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id : 1, description : 'Learn cool things'},
    {id : 2, description : 'Learn some other things'},
    {id : 3, description : 'Eat wings'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
