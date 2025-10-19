import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { Country } from '@app/country/interfaces/country.interface';

@Component({
  selector: 'app-country-information',
  imports: [DecimalPipe, DatePipe],
  templateUrl: './country-information.html',
  styleUrl: './country-information.scss'
})
export class CountryInformation {
  country = input.required<Country>();
  today: number = Date.now();

}
