import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Education {
  yearRange: string;
  institution: string;
  degree: string;
  description: string;
}

interface Experience {
  yearRange: string;
  company: string;
  role: string;
  description: string;
  frontend: string;
  backend?: string;
}


@Component({
  selector: 'app-education-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education-experience.component.html',
  styleUrl: './education-experience.component.scss'
})
export class EducationExperienceComponent {
  educationList: Education[] = [
    {
      yearRange: '2020 - 2024',
      institution: 'University of AIU',
      degree: 'Good',
      description: `Based on the recommendation and guidance of the Dean of the College at the Arab International University, I transferred to that university. Here I obtained a good degree in Computer Science with a specialization in Software Engineering.`
    },
    {
      yearRange: '2024 - x',
      institution: 'University of SVU',
      degree: 'Business Mangement',
      description: `Its My Next Goal In My Study`
    }
  ];

  // Experience Data
  experienceList: Experience[] = [
    {
      yearRange: '2022 - 2023',
      company: 'FreeLancer',
      role: 'Front End Developer',
      description: `We are a University backed startup building a site builder. I build a Website to allow users to find his Requirements`,
      frontend: 'React/Typescript + TailwindCss',
    },
    {
      yearRange: '2024 - Ongoing',
      company: 'JOYBOX',
      role: 'FrontEnd Developer',
      description: `I helped an application with steady organic growth by giving it the boost it needed, refactoring and enhancing the frontend.`,
      frontend: 'AngularJs + Typescript + TailwindCss | AngularMaterial',
    }
  ];
}
