import { Component, inject } from '@angular/core';
import { TaskService } from '../../Services/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css',
})
export class ShowTaskComponent {
  taskList: string[] = ['Task 1', 'Task 2', 'Task 3'];

  taskService: TaskService = inject(TaskService);

  ngOnInit() {
    this.taskService.createTask.subscribe((task) => {
      this.taskList.push(task);
    });
  }

  deleteTask(task: string) {
    let taskId: number = this.taskList.indexOf(task);
    this.taskList.splice(taskId, 1);
  }
}
