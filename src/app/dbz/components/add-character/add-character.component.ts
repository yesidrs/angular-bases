import { Component, Output } from '@angular/core';
import { Character } from '../../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss'],
})
export class AddCharacterComponent {
  character: Character = {
    name: '',
    power: '',
  };

  emitCharacter() {
    console.log(this.character);
    this.character.name = '';
    this.character.power = '';
  }
}
