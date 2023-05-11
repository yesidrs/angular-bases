import { NgModule } from '@angular/core';
import { CounterComponent } from './counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CounterComponent],
  exports: [CounterComponent],
  imports: [FormsModule],
})
export class CounterModule {}
