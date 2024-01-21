import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  createTask = new Subject<string>();

  createNewTask(value: string){
    return this.createTask.next(value);
  }
}
