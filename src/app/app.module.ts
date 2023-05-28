import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardModule} from "primeng/card";
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
import {DashboardModule} from "./components/dashboard/dashboard.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageService} from "primeng/api";
@NgModule({
  declarations: [
    AppComponent,
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
    CheckboxModule,
    DashboardModule,
    BrowserAnimationsModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
