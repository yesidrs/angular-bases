import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'Counter';
  public number: number = 0;
  @Input() increase: number = 0; 

  public increment(): void {
    this.number++;
  }

  public decrement(): void {
    if(this.number > 0) {
      this.number--;
    } else {
      alert('This is the minimum value!');
    }
  }

  public reset(): void {
    this.number = 0;
  }
}
