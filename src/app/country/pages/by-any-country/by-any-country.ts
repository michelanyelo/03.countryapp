import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '@app/country/services/country.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-by-any-country',
  imports: [],
  templateUrl: './by-any-country.html',
  styleUrl: './by-any-country.scss',
})
export class ByAnyCountry {
  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);

  countryResource = rxResource({
    params: () => ({
      code: this.countryCode,
    }),
    stream: ({ params }) => {
      if (!params.code) return throwError(() => new Error('Código de país no encontrado'));
      return this.countryService.searchCountryByCode(params.code);
    },
  });
}
