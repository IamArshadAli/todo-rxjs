import { Component, inject } from '@angular/core';
import { TaskService } from '../../Services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  newTask: string = '';
  hasError: boolean = false;
  
  taskService: TaskService = inject(TaskService);

  addTask() {
    if (!this.newTask.trim().length) {
      this.hasError = true;
      return;
    }
    this.hasError = false;
    this.taskService.createNewTask(this.newTask);
    this.newTask = '';
  }
}


// From New Git Acc