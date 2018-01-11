import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'task',
    templateUrl: 'taskdetail.component.html',
    styles: ['taskdetail.component.scss'],
    styleUrls: ['../../../node_modules/bulma/css/bulma.css', 'taskdetail.component.css']
})

export class TaskDetailComponent implements OnInit {
    constructor(private _route: ActivatedRoute,
                private _router: Router
     ) {
        console.log('the task name for this route is: '+ _route.snapshot.paramMap.get('id'));
        //console.log("Navigated here");
     }

     back(): void {
         this._router.navigate(['/home'])
     }

    ngOnInit() { }
}