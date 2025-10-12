import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-search-input-component',
  imports: [],
  templateUrl: './search-input-component.html',
  styleUrl: './search-input-component.scss'
})
export class SearchInputComponent {
  value = output<string>();
  placeholder = input('Buscar')
}
