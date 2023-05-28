import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import {LoginService} from "../../auth/services/login.service";
import {AuthService} from "../../auth/services/auth.service";
import {ILogin} from "../../auth/types/login.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {IToken} from "../../auth/types/token.interface";
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
    private messageService: MessageService,
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
    this.loading = true;

    const loginBody: ILogin = {
      username: this.fg.get('username')?.value,
      password: this.fg.get('password')?.value
    }

     this.loginService.login(loginBody).subscribe((response: HttpResponse<IToken>) => {
       this.loading = false;
       this.authService.loginSuccess(response.body?.accessToken as string);
       this.showSuccess("Login successful");
       setTimeout(() => {
         this.router.navigate(['/dashboard']).then((a) => {
         }).catch(e => {
           console.log(`Error: ${e}`)
         })
       }, 3000)
     }, (error: HttpErrorResponse) => {
       console.error('An error occurred', error);
       this.loading = false;
       this.showError("Something wrong happened");
     })
  }

  showSuccess(detail: any) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: detail,
      life: 2000
    });
  }

  showError(detail: any) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: detail,
      life: 4000
    });
  }
}
