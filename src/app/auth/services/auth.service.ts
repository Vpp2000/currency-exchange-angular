import {Router} from "@angular/router";
import {TokenService} from "./token.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token!: string;
  payload: any;

  constructor(private router: Router, private tokenService: TokenService) {}

  loginSuccess(token: string) {
    this.tokenService.setToken(token);
  }

  isLoggedIn() {
    return localStorage.getItem('logged') === 'true';
  }
}
