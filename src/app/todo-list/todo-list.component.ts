import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  newTask = '';
  tasks: any = [] ;

  addTask() {
    if (this.newTask.trim() === '') {
      return;
    }
    this.tasks.push({ name: this.newTask, completed: false });
    this.newTask = '';
  }

  removeTask(task: string) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }
}
