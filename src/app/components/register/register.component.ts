import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../auth/services/login.service";
import {AuthService} from "../../auth/services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  fg!: FormGroup;
  loading = false;
  valCheck: string[] = ['remember'];
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
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

  onSubmit() {
    /*
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
    }*/
  }

}
