import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss'],
})
export class AddCharacterComponent {
  @Output()
  onEmitCharacter: EventEmitter<Character> = new EventEmitter();

  character: Character = {
    id: '',
    name: '',
    power: 0,
  };

  emitCharacter() {
    if (this.character.name.length === 0 || this.character.power === 0) {
      alert('Please enter a name and power');
      return;
    }

    this.onEmitCharacter.emit(this.character);

    this.character = {
      id: '',
      name: '',
      power: 0,
    };
  }
}
