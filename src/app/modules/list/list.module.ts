import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { TrackByComponent } from './components/track-by/track-by.component';

@NgModule({
  declarations: [TrackByComponent],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
