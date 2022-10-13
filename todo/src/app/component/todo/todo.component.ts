import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoItem: string = '';
  todoObj:any={
    todoItem:'',
    color:''
  };
  todoItemsArray: any[] = [];
  constructor() { }

  ngOnInit(): void {
    const localData=localStorage.getItem('todoitem');
    if(localData!=null){
      this.todoItemsArray=JSON.parse(localData);
    }
  }
  onItemAdd() {
    this.todoItemsArray.push(this.todoObj);
    localStorage.setItem('todoitem', JSON.stringify(this.todoItemsArray));
    this.todoObj ={
      todoItem:'',
      color:''
    }
  }

}
