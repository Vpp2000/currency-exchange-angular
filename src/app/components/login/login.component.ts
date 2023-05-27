import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import {LoginService} from "../../auth/services/login.service";
import {AuthService} from "../../auth/services/auth.service";
import {ILogin} from "../../auth/types/login.interface";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  fg!: FormGroup;
  loading = false;
  valCheck: string[] = ['remember'];
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.fg = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      ]
    });
  }

  async onSubmit() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('lastSession');
    try {
      this.loading = true;
      const user = this.fg.value as ILogin;
      const resultLogin = await this.loginService.login(user);
      this.loading = false;
      const token = resultLogin.data;
      this.authService.loginSuccess(token as string);
    } catch (err: any) {
      this.showError(err.error.message);
      this.loading = false;
    }
  }
  showError(detail: any) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: detail
    });
  }
}
