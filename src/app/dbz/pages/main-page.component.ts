import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return this.dbzService.characters;
  }

  newCharacter(character: Character) {
    this.dbzService.onNewCharacter(character);
  }

  deleteCharacter(id: string) {
    this.dbzService.onDeleteCharacter(id);
  }
}
