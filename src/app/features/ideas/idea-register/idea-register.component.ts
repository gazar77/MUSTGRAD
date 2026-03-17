import { Component } from '@angular/core';
import { IdeaService } from '../../../core/services/idea.service';
import { Router } from '@angular/router';

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
        category: '' as any,
        teamSize: 4,
        leaderName: '',
        leaderId: ''
    };

    constructor(private ideaService: IdeaService, private router: Router) {}

    onSubmit() {
        this.ideaService.addIdea({
            id: 0,
            title: this.formData.title,
            description: this.formData.description,
            category: this.formData.category || 'تطوير مواقع ويب',
            difficulty: 'Medium',
            requiredSkills: [],
            maxTeamSize: this.formData.teamSize,
            supervisorName: this.formData.leaderName, // using leader name as mock supervisor or similar
            createdAt: new Date(),
            status: 'Open'
        }).subscribe(() => {
            alert('تم تسجيل فكرة المشروع بنجاح!');
            this.router.navigate(['/ideas']);
        });
    }
}
