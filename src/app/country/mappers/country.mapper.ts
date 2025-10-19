import { Country } from '../interfaces/country.interface';
import { RestCountryResponse } from '../interfaces/rest-country.interface';

export class CountryMapper {
  static mapRestCountryToCountry(country: RestCountryResponse): Country {
    return {
      name: country.translations.spa.common ?? country.name.common,
      capital: country.capital.join(', '),
      population: country.population,
      flags: {
        png: country.flags.png,
        svg: country.flags.svg,
        alt: country.flags.alt,
      },
      cca2: country.cca2,
      region: country.region,
      subregion: country.subregion,
    };
  }

  static mapRestCountryArrayToCountryArray(countries: RestCountryResponse[]): Country[] {
    return countries.map(this.mapRestCountryToCountry);
  }
}
