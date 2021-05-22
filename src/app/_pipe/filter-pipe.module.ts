import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterDatePipe } from './filter-date.pipe';
import { TransformPipe } from './transform.pipe';



@NgModule({
  declarations: [FilterDatePipe, TransformPipe],
  exports: [FilterDatePipe, TransformPipe],
  imports: [CommonModule]
})
export class FilterPipeModule { }
