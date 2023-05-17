import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  characters: Character[] = [
    { name: 'Goku', power: 15000 },
    { name: 'Vegeta', power: 8500 },
    { name: 'Krillin', power: 5000 },
  ];

  onNewCharacter(character: Character) {
    this.characters.push(character);
  }

  onDeleteCharacter(index: number) {
    this.characters.splice(index, 1);
  }
}
