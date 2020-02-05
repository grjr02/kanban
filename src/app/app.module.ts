import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http'
// import { HttpClient } from '@angular/common/http'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignComponent } from './components/login/sign.component';
import { LoggedInComponent } from './components/logged/logged-in/logged-in.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SignComponent,
    LoggedInComponent
  ],
  imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule,
            MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule, FormsModule,
            HttpClientModule, 
            ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
