import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Country } from '@app/country/interfaces/country.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-country-list-component',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list-component.html',
  styleUrl: './country-list-component.scss'
})
export class CountryListComponent {

  countries = input<Country[]>();

}
