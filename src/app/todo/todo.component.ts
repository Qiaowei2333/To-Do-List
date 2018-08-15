import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../shared/models/toDoItem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  itemName: string = "";
  items: ToDoItem[]=[
    new ToDoItem("First thing"),
    new ToDoItem("Second thing")
  ];
  constructor() { }

  ngOnInit() {
  }

  onCreateItem() {
    this.items.push(new ToDoItem(this.itemName));
  }

  onDeleteItem(event: Event) {
    let curStr = (<HTMLLIElement>event.target).textContent;
    console.log(curStr);
    this.items = this.items.filter(val=>val.name!=curStr);
  }
}
