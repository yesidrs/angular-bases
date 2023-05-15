import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  heroes = [
    {
      alias: 'Spiderman',
      name: 'Peter Parker',
      age: 16,
      description: 'Spider powers and spider sense',
    },
    {
      alias: 'Captain America',
      name: 'Steve Rogers',
      age: 100,
      description: 'Superhuman strength, speed, agility, reflexes, and durability',
    },
    {
      alias: 'Wolverine',
      name: 'James Howlett',
      age: 200,
      description: 'Regeneration and adamantium skeleton',
    }
  ];
}
