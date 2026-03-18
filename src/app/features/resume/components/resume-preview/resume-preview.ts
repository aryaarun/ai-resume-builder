import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-resume-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-preview.html',
  styleUrl: './resume-preview.css',
})
export class ResumePreview {
    @ViewChild('resumeContent') resumeContent!: ElementRef;

    @Input() data: any;
}
