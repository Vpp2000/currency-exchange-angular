import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardModule} from "primeng/card";
import { CoinsComponent } from './components/coins/coins.component';
import {TableModule} from "primeng/table";
import { HttpClientModule } from "@angular/common/http";
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import {DialogModule} from "primeng/dialog";
import {PasswordModule} from "primeng/password";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import { RegisterComponent } from './components/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    TableModule,
    InputTextModule,
    HttpClientModule,
    ReactiveFormsModule,
    DialogModule,
    PasswordModule,
    ToastModule,
    ButtonModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
