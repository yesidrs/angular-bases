import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input() superhero = 'Spiderman';
  @Input() name = 'Peter Parker';
  @Input() age = 16;
  @Input() description = '';

  get capitalizeName(): string {
    return this.superhero.toUpperCase();
  }

  getHeroDescription(): string {
    return this.description;
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
