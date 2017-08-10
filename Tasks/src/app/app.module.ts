import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Angular2FontawesomeModule} from 'angular2-fontawesome/angular2-fontawesome';
import {Filtering} from '../services/filtering-service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Angular2FontawesomeModule
  ],
  providers: [Filtering],
  bootstrap: [AppComponent]
})
export class AppModule { }
