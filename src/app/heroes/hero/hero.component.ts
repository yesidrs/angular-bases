import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  superhero = 'Spiderman';
  name = 'Peter Parker';
  age = 16;

  get capitalizeName(): string {
    return this.superhero.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old`;
  }

  changeHero(): void {
    this.superhero = 'Ironman';
    this.name = 'Tony Stark';
    this.age = 45;
  }

  reset(): void {
    this.superhero = 'Spiderman';
    this.name = 'Peter Parker';
    this.age = 16;
  }
}
