import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RestCountryResponse } from '../interfaces/rest-country.interface';
import { map, Observable, catchError, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private apiUrl = 'https://restcountries.com/v3.1';

  searchByCapital(query: string): Observable<Country[]> {
    query = query.trim().toLowerCase();
    return this.http.get<RestCountryResponse[]>(`${this.apiUrl}/capital/${query}`).pipe(
      map((restCountries) => CountryMapper.mapRestCountryArrayToCountryArray(restCountries)),
      catchError((error) => {
        console.log('error', error);

        return throwError(() => new Error('Error al buscar por capital'));
      })
    );
  }
}
