import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {RegisterRequest, RegisterResponse} from "./register.types";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService{
  baseUrl: string = 'http://localhost:9999/auth/register'

  constructor(private http: HttpClient){
  }

  registerUser(payload: RegisterRequest): Observable<HttpResponse<RegisterResponse>> {
    return this.http.post<RegisterResponse>(this.baseUrl, payload, {observe: 'response'});
  }

}
