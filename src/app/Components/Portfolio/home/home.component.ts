import { ApplicationRef, ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../../Theme/theme-service.service';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';
import { LucideAngularModule, ArrowDownToLine, Sun, Moon, Github, Linkedin, Instagram } from 'lucide-angular';
import { first } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, CommonModule, NgxPrintModule, LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  firstName = 'Amer ';
  lastName = 'Habanakeh ';
  fullName = "Amer Habanakeh"
  jobTitle = 'Front End Developer | React , AngularJs | Software Engineer';
  location = 'Damascus';
  company = 'JOYBOX';
  socialLinks = {
    github: 'https://github.com/AmerHabanakeh',
    linkedin: 'https://linkedin.com/in/amer-habanakeh-0928b7301',
    instagram: 'https://instagram.com/amer.habanakeh/'
  };

  readonly ArrowDownToLine = ArrowDownToLine;
  readonly Sun = Sun;
  readonly Moon = Moon;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Instagram = Instagram;



  @Output('downloadPdf') downloadPdfClicked: EventEmitter<void> = new EventEmitter<void>()
  constructor(public themeService: ThemeService, private cdr: ChangeDetectorRef, private applicationRef: ApplicationRef ) {
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  downloadPdf() {
    this.downloadPdfClicked.emit();
  }
  
}