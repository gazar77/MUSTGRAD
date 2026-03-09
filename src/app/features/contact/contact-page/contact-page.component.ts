import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss'],
    standalone: false
})
export class ContactPageComponent {
    contactForm: FormGroup;
    submitted = false;
    successMessage = '';

    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            subject: ['', Validators.required],
            message: ['', Validators.required]
        });
    }

    onSubmit() {
        this.submitted = true;
        if (this.contactForm.valid) {
            setTimeout(() => {
                this.successMessage = 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.';
                this.contactForm.reset();
                this.submitted = false;
            }, 1000);
        }
    }
}
