import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../auth/services/login.service";
import {AuthService} from "../../auth/services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RegisterService} from "./register.service";
import {RegisterRequest} from "./register.types";

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
    private registerService: RegisterService,
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
    const payload = this.fg.value as RegisterRequest;

    this.registerService.registerUser(payload).subscribe(
      (response) => {
        const data = response.body!;
        setTimeout(() => {
          this.showSuccess("Successfully registered")
        }, 3000)
        this.router.navigate(['/login']).then((a) => {
        }).catch(e => {
          this.showError("Something went wrong on routing")
        })
      },
      (error) => {
        this.showError("Something went wrong on registration")
      }
    );
  }

  showError(detail: any) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: detail,
      life: 4000
    });
  }

  showSuccess(detail: any) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: detail,
      life: 2000
    });
  }

}
