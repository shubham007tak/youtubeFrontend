import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './isp/isp.module#IspModule'
  },


  {
    path: '**',
    loadChildren: './isp/isp.module#IspModule'
  },
  {
    path: '*',
    loadChildren: './isp/isp.module#IspModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
