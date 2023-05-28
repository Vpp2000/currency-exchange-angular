import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {ILogin} from "../../../auth/types/login.interface";
import {Observable} from "rxjs";
import {IToken} from "../../../auth/types/token.interface";
import {CurrencyDb} from "./currency.types";
import {TokenService} from "../../../auth/services/token.service";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  baseUrl = 'http://localhost:9999/currency'

  constructor(private http: HttpClient, private tokenService: TokenService){

  }

  getCurrencies():Observable<HttpResponse<CurrencyDb[]>>{
    const tokenEncoded = this.tokenService.getTokenEncoded();
    console.log(`Token encoded: ${tokenEncoded}`);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenEncoded}`
    });

    return this.http.get<CurrencyDb[]>(this.baseUrl, { headers: headers, observe: 'response' })
  }

}
