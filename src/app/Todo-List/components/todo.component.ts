import { Component, OnInit } from '@angular/core';
import { Task } from '../classes/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  title = 'Todo List';
  public tasks: Task[] = [];

  ngOnInit(): void {
  }
  
  public items = [];
  newTask: string = "";
  priotrity: number = 0;

    public addToList() {
    if (this.newTask != '' && this.priotrity != 0) {
      this.tasks.push(new Task(this.newTask, this.priotrity));
      this.newTask = '';
      this.priotrity = 0;
    }
    else {
      let message = ""
      if (this.newTask == "") message += "Task required!! "
      if (this.priotrity == 0) message += "Priority required!!"

      alert(message)
    }
  }

   public markDone(index: number) {
    this.tasks[index].isDone = !this.tasks[index].isDone
  }

    public deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  /*  getTaskColor(p = 0, done = false) {
    let colors = ["blue", "yellow", "red"];
    return done ? "bg-green-600" : "bg-" + colors[p - 1] + "-500"
  }*/
}
