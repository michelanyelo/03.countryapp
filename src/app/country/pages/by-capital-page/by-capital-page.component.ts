import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from '@app/country/components/search-input-component/search-input-component';
import { CountryListComponent } from '@app/country/components/country-list-component/country-list-component';
import { CountryService } from '@app/country/services/country.service';
import { RestCountryResponse } from '@app/country/interfaces/rest-country.interface';
import { Country } from '@app/country/interfaces/country.interface';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page-component.html',
  styleUrl: './by-capital-page.component.scss',
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService);

  // isLoading = signal(false);
  // isError = signal<string | null>(null);
  // countries = signal<Country[]>([]);

  // onSearch(query: string) {
  //   if (this.isLoading()) return;

  //   this.isLoading.set(true);
  //   this.isError.set(null);

  //   this.countryService.searchByCapital(query).subscribe({
  //     next:(countries) => {
  //       this.isLoading.set(false);
  //       this.countries.set(countries);
  //       console.log(countries);
  //     },
  //     error:(err) => {
  //       this.isLoading.set(false);
  //       this.countries.set([]);
  //       this.isError.set(err.message);
  //     },
  //   });
  // }

  query = signal<string>('');

  // countryResource = resource({
  //   params: () => ({
  //     query: this.query(),
  //   }),
  //   loader: async ({ params }) => {
  //     if (!params.query) return [];
  //     return await firstValueFrom(this.countryService.searchByCapital(params.query));
  //   },
  // });

  capitalResource = rxResource({
    params: () => ({
      query: this.query(),
    }),
    stream: ({ params }) => {
      if (!params.query) return of([]);
      return this.countryService.searchByCapital(params.query);
    },
  });
}
