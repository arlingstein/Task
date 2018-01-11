import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { Filtering } from '../services/filtering-service';
import { TaskDetailComponent } from './TaskDetail/taskdetail.component';
import { HomeComponent } from './Home/home.component';
import { AppComponent } from './app.component';

//Modules
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

let routes: Routes = [
  { path: 'taskdetail/:id', component: TaskDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    Angular2FontawesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Filtering],
  bootstrap: [AppComponent]
})
export class AppModule { }
