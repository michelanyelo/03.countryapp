import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-top-menu-component',
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './top-menu-component.html',
  styleUrl: './top-menu-component.scss'
})
export class TopMenuComponent {

}
