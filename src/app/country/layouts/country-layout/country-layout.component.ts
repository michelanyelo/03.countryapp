import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {TopMenuComponent} from '../../components/top-menu-component/top-menu-component';

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './country-layout.component.html',
  styleUrl: './country-layout.component.scss'
})
export class CountryLayoutComponent {

}
