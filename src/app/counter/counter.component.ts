import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  title: string = 'Counter';
  number: number = 0;
  increase: number = 0;

  increment(): void {
    if (this.increase > 0) {
      this.number += this.increase;
    } else {
      this.number++;
    }
  }

  decrement(): void {
    if (this.increase > 0) {
      this.number -= this.increase;
    }

    if (this.number > 0) {
      this.number--;
    } else {
      alert('This is the minimum value!');
    }
  }

  reset(): void {
    this.number = 0;
    this.increase = 0;
  }
}
