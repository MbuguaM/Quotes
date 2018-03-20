import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { OutputComponent } from './components/output/output.component';

import { OutputDetailsComponent } from './components/output-details/output-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    OutputComponent,
    OutputDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
