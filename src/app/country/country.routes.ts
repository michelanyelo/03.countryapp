import {Routes} from "@angular/router";
import {ByCapitalPageComponent} from "./pages/by-capital-page/by-capital-page.component";
import {CountryLayoutComponent} from "./layouts/country-layout/country-layout.component";
import {ByCountry} from '@app/country/pages/by-country/by-country';
import {ByRegion} from '@app/country/pages/by-region/by-region';
import {ByAnyCountry} from '@app/country/pages/by-any-country/by-any-country';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent
      },
      {
        path: 'by-country',
        component: ByCountry
      },
      {
        path: 'by-region',
        component: ByRegion
      },
      {
        path: 'by-country/:code',
        component: ByAnyCountry
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      }
    ]
  },
];

export default countryRoutes;
