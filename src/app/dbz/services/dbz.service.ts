import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  characters: Character[] = [
    { id: uuid(), name: 'Goku', power: 15000 },
    { id: uuid(), name: 'Vegeta', power: 8500 },
    { id: uuid(), name: 'Krillin', power: 5000 },
  ];

  onNewCharacter(character: Character) {
    const newCharacter = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
