import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {TokenService} from "../services/token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  static redirectLogin: string;
  static redirectRegister: string;
  constructor(private router: Router, private tokenService: TokenService) {}

  canActivate() {
    const token = this.tokenService.getTokenEncoded();

    if (!token) {
      this.router.navigate(['/unauthorized']).then(r => {});
      return false;
    }
    // if (!this.authService.isSelectedBranchStore()) {
    //   this.router.navigate(['/auth/select-branch-store']);
    //   return false;
    // }
    return true;
  }
}
