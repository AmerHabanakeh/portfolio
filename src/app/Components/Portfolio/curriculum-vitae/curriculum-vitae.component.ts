import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum-vitae',
  standalone: true,
  imports: [],
  templateUrl: './curriculum-vitae.component.html',
  styleUrl: './curriculum-vitae.component.scss'
})
export class CurriculumVitaeComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf';  
    link.download = 'AmerHabanakeh-CV.pdf'; 
    link.click();
  }
}
