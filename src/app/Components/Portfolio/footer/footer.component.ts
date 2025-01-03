import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Github, Linkedin, Instagram } from 'lucide-angular';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();

  socialLinks = [
    {
      label: 'Github',
      url: 'https://github.com/AmerHabanakeh',
      iconPath: Github,
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amer-habanakeh-0928b7301',
      iconPath: Linkedin,
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/amer.habanakeh/',
      iconPath: Instagram,
    },
  ];
}
