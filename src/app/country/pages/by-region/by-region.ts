import { Component } from '@angular/core';
import {CountryListComponent} from "@app/country/components/country-list-component/country-list-component";
import {SearchInputComponent} from "@app/country/components/search-input-component/search-input-component";

@Component({
  selector: 'app-by-region',
    imports: [
        CountryListComponent,
        SearchInputComponent
    ],
  templateUrl: './by-region.html',
  styleUrl: './by-region.scss'
})
export class ByRegion {

}
