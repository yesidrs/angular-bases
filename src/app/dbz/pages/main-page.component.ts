import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  characters: Character[] = [
    { name: 'Goku', power: 15000 },
    { name: 'Vegeta', power: 8500 },
    { name: 'Krillin', power: 5000 },
  ];

  addNewCharacter(character: Character) {
    this.characters.push(character);
  }
}
