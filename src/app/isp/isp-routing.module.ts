import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IspComponent } from './isp/isp.component';

const routes: Routes = [
  {
    path: '',
    component: IspComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IspRoutingModule { }
