import {Component, output} from '@angular/core';
import {SearchInputComponent} from '@app/country/components/search-input-component/search-input-component';
import {CountryListComponent} from '@app/country/components/country-list-component/country-list-component';

@Component({
  selector: 'app-by-country',
  imports: [
    SearchInputComponent,
    CountryListComponent
  ],
  templateUrl: './by-country.html',
  styleUrl: './by-country.scss'
})
export class ByCountry {

}
