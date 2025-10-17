import { Component, inject, output, resource, signal } from '@angular/core';
import { SearchInputComponent } from '@app/country/components/search-input-component/search-input-component';
import { CountryListComponent } from '@app/country/components/country-list-component/country-list-component';
import { CountryService } from '@app/country/services/country.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-country',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country.html',
  styleUrl: './by-country.scss',
})
export class ByCountry {
  countryService = inject(CountryService);

  query = signal<string>('');

  countryResource = resource({
    params: () => ({
      query: this.query(),
    }),
    loader: async ({ params }) => {
      if (!params.query) return [];
      return await firstValueFrom(this.countryService.searchByCountry(params.query));
    },
  });
}
