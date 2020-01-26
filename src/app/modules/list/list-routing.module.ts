import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackByComponent } from './components/track-by/track-by.component';

const routes: Routes = [
  {
    path : 'track',
    component: TrackByComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
