import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Task } from '../../models/Tasks';
import { NgFor } from '@angular/common';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { Filtering } from '../../services/filtering-service';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/bufferTime';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['../../../node_modules/bulma/css/bulma.css', 'home.component.css']
})
export class HomeComponent implements OnInit {
    title = 'Task Scheduler';
    name: string = '';
    taskList: Task[] = [];
    taskList$: Observable<Task[]>;
    taskField: string = '';
    taskDescriptionField: string = '';
    warning: boolean = false;
    taskListCache: Task[] = [];
    filterString: string = "";
    filterCleared: boolean = true;
    // nums: number[] = [1, 3, 5, 7, 2, 4, 6, 8, 9, 10];

    path:string = './assets/tasks.json';

    testName: string;

    constructor(private taskFilter: Filtering,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private http: HttpClient,
    ) {
        // this.http.get<Task>('../../store/tasks.json')
        this.http.get<Task[]>(this.path)
        .subscribe(x => this.taskList = x)
       // .subscribe(x => console.log(x));
    }

    ngOnInit() {


        this.taskList$ = Observable.of(
            [
                { taskName: "DefaultTaskName1", description: "DefaultDescription1" },
                { taskName: "DefaultTaskName2", description: "DefaultDescription2" },
                { taskName: "Arlington", description: "DefaultDescription3" },
                { taskName: "Arlondo", description: "DefaultDescription4" }
            ]
        );
    }
    add(): void {
        this.warning = false;
        if (this.taskField && this.taskDescriptionField) {
            this.taskList.push({ taskName: this.taskField, description: this.taskDescriptionField });
            this.http.post<Task>(this.path, { taskName: this.taskField, description: this.taskDescriptionField });
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
        if (this.filterCleared) {
            this.taskListCache = this.taskList;
        }
        if (!$event.target.value) {
            this.filterCleared = true;
            this.taskList = this.taskListCache;
        }
        else {
            this.filterString = $event.target.value;
            this.filterCleared = false;
            this.taskList = this.taskFilter.filter(this.taskListCache, $event.target.value);
        }
    }

    edit() {

    }

    delete(event, index) {
        console.log(event);
        this.taskList.splice(index, 1);
    }

    clearFilterArea() {
        console.log("filter String before: " + this.filterString);
        this.filterString = "";
        console.log("clicked");
    }

    routeTo(endpoint: string, taskName: string) {
        this._router.navigate([`/${endpoint}/${taskName}`]);
    }
}
