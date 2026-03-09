import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplateListComponent } from './template-list/template-list.component';

@NgModule({
  declarations: [
    TemplateListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TemplatesRoutingModule
  ]
})
export class TemplatesModule { }
