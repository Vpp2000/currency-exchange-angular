import {Injectable} from "@angular/core";
import {ILogin} from "../types/login.interface";
import {lastValueFrom, Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {IToken} from "../types/token.interface";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = 'http://localhost:9999/auth/login'

  constructor(private http: HttpClient) { }

  login(user: ILogin): Observable<HttpResponse<IToken>> {
    return this.http.post<IToken>(this.loginUrl, user, { observe: 'response' });
  }
}
