import { Component } from '@angular/core';
import { ResumeForm } from '../../components/resume-form/resume-form';
import { ResumePreview } from '../../components/resume-preview/resume-preview';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-resume-builder',
  standalone: true,
 imports: [
    ResumeForm,
    ResumePreview
  ],  templateUrl: './resume-builder.html',
  styleUrl: './resume-builder.css',
})
export class ResumeBuilder {
  resumeData: any = {};
@ViewChild(ResumePreview)
previewComponent!: ResumePreview;

  onFormChange(data: any) {
    this.resumeData = data;
  }


  async downloadPDF() {

  const element = this.previewComponent?.resumeContent?.nativeElement;

  if (!element) {
    console.error('Element not found');
    return;
  }

  element.scrollIntoView();

  await new Promise(resolve => setTimeout(resolve, 500));

  const html2canvas = (await import('html2canvas')).default;
  const jsPDF = (await import('jspdf')).default;

  const canvas = await html2canvas(element, {
    useCORS: true,
    scale: 2
  });

  const imgData = canvas.toDataURL('image/png');

  const pdf = new jsPDF('p', 'mm', 'a4');

  const imgWidth = 210;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  pdf.save('resume.pdf');
}
}
