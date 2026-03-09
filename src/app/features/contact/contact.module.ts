import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
    declarations: [
        ContactPageComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ContactRoutingModule
    ]
})
export class ContactModule { }
