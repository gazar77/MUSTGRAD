import { Component } from '@angular/core';

@Component({
    selector: 'app-idea-register',
    templateUrl: './idea-register.component.html',
    styleUrls: ['./idea-register.component.scss'],
    standalone: false
})
export class IdeaRegisterComponent {
    formData = {
        title: '',
        description: '',
        category: '',
        teamSize: 2,
        leaderName: '',
        leaderId: ''
    };

    onSubmit() {
        console.log('Form Submitted', this.formData);
        alert('تم إرسال فكرة المشروع للمراجعة بنجاح!');
    }
}
