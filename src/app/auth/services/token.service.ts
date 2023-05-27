import {Injectable} from "@angular/core";
import {IToken} from "../types/token.interface";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  getTokenBody() {
    const tokenEncoded: string = localStorage.getItem('token') as string;
    return this.parseJwt(tokenEncoded);
  }

  setToken(tokenEncoded: string) {
    localStorage.setItem('token', tokenEncoded);
    const tokenDecoded = this.parseJwt(tokenEncoded);
  }

  parseJwt(token: string): IToken {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }
}
