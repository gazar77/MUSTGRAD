import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-requirements',
    templateUrl: './requirements.component.html',
    styleUrls: ['./requirements.component.scss'],
    standalone: false
})
export class GraduationRequirementsComponent implements OnInit {
    requirementNumber: string = '1';
    title: string = '';

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.requirementNumber = data['number'] || '1';
            this.title = `متطلبات المشروع (${this.requirementNumber})`;
        });
    }

    onFileUpload(event: any) {
        const file = event.target.files[0];
        if (file) {
            alert(`تم رفع الملف: ${file.name}`);
        }
    }
}
