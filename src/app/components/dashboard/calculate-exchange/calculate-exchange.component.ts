import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CurrencyService} from "../currency/currency.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {CurrencyDb} from "../currency/currency.types";
import {CurrencyFormData, ExchangeCalculationPayload, ExchangeCalculationResponse} from "./calculate-exchange.type";
import {CalculateExchangeService} from "./calculate-exchange.service";
interface Currency {
  label: string;
  value: string;
}



@Component({
  selector: 'app-calculate-exchange',
  templateUrl: './calculate-exchange.component.html',
  styleUrls: ['./calculate-exchange.component.scss']
})
export class CalculateExchangeComponent {
  currencies!: Currency[];
  currencyForm!: FormGroup;
  convertedValue!: number;

  constructor(private currencyService: CurrencyService ,private formBuilder: FormBuilder, private calculateExchangeService: CalculateExchangeService) {
    this.currencyForm = this.formBuilder.group({
      fromCurrency: [null, Validators.required],
      toCurrency: [null, Validators.required],
      amount: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe(
      (response: HttpResponse<CurrencyDb[]>) => {
        const data: Currency[] = response.body!.map(currency => {
          return {
            label: currency.name,
            value: currency.code
          }
        });
        this.currencies = data;
      },
      (error: HttpErrorResponse) => {

      }
    )
  }

  convertCurrency(): void {
    if (this.currencyForm.invalid) {
      return;
    }

    const formData = this.currencyForm.value as CurrencyFormData;
    const payload: ExchangeCalculationPayload = {
      originCurrencyCode: formData.fromCurrency,
      targetCurrencyCode: formData.toCurrency,
      originAmount: formData.amount
    }

    this.calculateExchangeService.calculateCurrencyExchange(payload).subscribe(
      (response) => {
        const data: ExchangeCalculationResponse = response.body!;
        this.convertedValue = data.targetAmount;
      },
  (error: HttpErrorResponse) => {

        }
      )

    // Perform currency conversion logic here
    // Example: You can make an API call to get the conversion rate and calculate the converted value
    // In this example, we'll assume a simple conversion rate of 1:2 (for demonstration purposes)
  }
}
