import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AiService } from '../../../../core/services/ai';

@Component({
  selector: 'app-resume-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './resume-form.html',
  styleUrl: './resume-form.css',
})
export class ResumeForm {
    @Output() formChange = new EventEmitter();
constructor(private aiService: AiService) {}

formData = {
  name: '',
  email: '',
  skills: '',
  experiences: [
    { company: '', role: '' }
  ],
  education: [
    { college: '', degree: '' }
  ],
  summary: ''
};

addExperience() {
  this.formData.experiences.push({ company: '', role: '' });
  this.onChange();
}

removeExperience(index: number) {
  this.formData.experiences.splice(index, 1);
  this.onChange();
}

addEducation() {
  this.formData.education.push({ college: '', degree: '' });
  this.onChange();
}

removeEducation(index: number) {
  this.formData.education.splice(index, 1);
  this.onChange();
}

  onChange() {
    this.formChange.emit(this.formData);
  }

  async generateSummary() {
  const result = await this.aiService.generateSummary(this.formData);
  this.formData.summary = result;
  this.onChange();
}
}
