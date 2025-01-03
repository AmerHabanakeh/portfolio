import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-core-tech',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './core-tech.component.html',
  styleUrl: './core-tech.component.scss'
})
export class CoreTechComponent {

  skills = [
    { name: 'HTML', progress: 10 },
    { name: 'CSS', progress: 8 },
    { name: 'JS', progress: 7 },
    { name: 'AngularJs', progress: 7 },
    { name: 'React', progress: 8 },
    { name: 'Git', progress: 9 },
  ];

  softSkills = [
    { name: 'Communication', progress: 8 },
    { name: 'Teamwork', progress: 10 },
    { name: 'Problem-Solving', progress: 7 },
    { name: 'Time Management', progress: 6 }
  ];

  motherLanguages = { name: 'Arabic', progress: 10 };
  anotherLanguages = { name: 'English', progress: 7 }
}
