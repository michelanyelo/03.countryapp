import { Component, input } from '@angular/core';
import { Country } from '@app/country/interfaces/country.interface';

@Component({
  selector: 'app-country-information',
  imports: [],
  templateUrl: './country-information.html',
  styleUrl: './country-information.scss'
})
export class CountryInformation {
  country = input.required<Country>();
}
