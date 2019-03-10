import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from './../material-module';

import { IspRoutingModule } from './isp-routing.module';
import { IspComponent } from './isp/isp.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [IspComponent],
  imports: [
    CommonModule,
    IspRoutingModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule
  ]
})
export class IspModule { }
