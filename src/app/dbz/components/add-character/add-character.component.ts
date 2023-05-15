import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss'],
})
export class AddCharacterComponent {
  addCharacter() {
    console.log('Agregando personaje');
  }
}
