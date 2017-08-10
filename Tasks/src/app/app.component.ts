import { Component } from '@angular/core';
import { Task } from '../models/Tasks';
import { NgFor } from '@angular/common';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { Filtering } from '../services/filtering-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/bulma/css/bulma.css']
})
export class AppComponent {
  title = 'Task Scheduler';
  name: string = '';
  taskList: Task[] = [];
  taskField: string = '';
  taskDescriptionField: string = '';
  warning: boolean = false;
  taskListCache: Task[] = [];
  filterString: string = "";
  filterCleared: boolean = true;

  constructor(private taskFilter: Filtering) { }

  add(): void {
    console.log('Added');
    this.warning = false;
    if (this.taskField && this.taskDescriptionField) {
      this.taskList.push({ taskName: this.taskField, description: this.taskDescriptionField });
      this.clearFields();
    }
    else {
      this.warning = true;
    }
  }

  clearFields() {
    this.taskDescriptionField = this.taskField = '';
  }

  filterList($event) {
    console.log("value is: " + $event.target.value);
    if (this.filterCleared) {
      this.taskListCache = this.taskList;
    }
    if (!$event.target.value) {
      console.log("No value present");
      this.filterCleared = true;
      this.taskList = this.taskListCache;
    }
    else {
      this.filterCleared = false;
      console.log("Filtering");
      this.taskList = this.taskFilter.filter(this.taskListCache, $event.target.value);
      console.log(this.taskList);
    }

  }

  edit() {

  }

  delete(event, index) {
    console.log(event);
    this.taskList.splice(index, 1);
  }
}
