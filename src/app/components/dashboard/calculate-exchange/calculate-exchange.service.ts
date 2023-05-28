import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {TokenService} from "../../../auth/services/token.service";
import {Observable} from "rxjs";
import {CurrencyDb} from "../currency/currency.types";
import {ExchangeCalculationPayload, ExchangeCalculationResponse} from "./calculate-exchange.type";

@Injectable({
  providedIn: 'root'
})
export class CalculateExchangeService {
  baseUrl = 'http://localhost:9999/currency/exchange';

  constructor(private http: HttpClient, private tokenService: TokenService){
  }

  calculateCurrencyExchange(exchangeCalculationPayload: ExchangeCalculationPayload): Observable<HttpResponse<ExchangeCalculationResponse>>{
    const tokenEncoded = this.tokenService.getTokenEncoded();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenEncoded}`
    });

    return this.http.post<ExchangeCalculationResponse>(this.baseUrl, exchangeCalculationPayload, { headers: headers, observe: 'response' });
  }

}
