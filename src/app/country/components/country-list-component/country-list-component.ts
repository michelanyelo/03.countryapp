import { Component, input } from '@angular/core';
import { Country } from '@app/country/interfaces/country.interface';

@Component({
  selector: 'app-country-list-component',
  imports: [],
  templateUrl: './country-list-component.html',
  styleUrl: './country-list-component.scss'
})
export class CountryListComponent {

  countries = input<Country[]>();

}
