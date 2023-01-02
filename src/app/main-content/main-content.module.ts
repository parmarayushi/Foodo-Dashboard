import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentRoutingModule } from './main-content-routing.module';
import { MainContentComponent } from './main-content.component';
import { MainContentPresentationComponent } from './main-content-presentation/main-content-presentation.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MainContentComponent,
    MainContentPresentationComponent
  ],
  imports: [
    CommonModule,
    MainContentRoutingModule,
  ]
})
export class MainContentModule { }
