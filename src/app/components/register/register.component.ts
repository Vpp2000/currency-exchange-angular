import { Component } from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loading = false;

  constructor() {
  }

  ngOnInit() {

  }
}
