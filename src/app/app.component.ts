import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from './Theme/theme-service.service';
import { AboutComponent } from "./Components/Portfolio/about/about.component";
import { HomeComponent } from "./Components/Portfolio/home/home.component";
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { StatisticsComponent } from "./Components/Portfolio/statistics/statistics.component";
import { CoreTechComponent } from "./Components/Portfolio/core-tech/core-tech.component";
import { MyWorksComponent } from "./Components/Portfolio/my-works/my-works.component";
import { EducationExperienceComponent } from "./Components/Portfolio/education-experience/education-experience.component";
import { GetTouchComponent } from "./Components/Portfolio/get-touch/get-touch.component";
import { FooterComponent } from "./Components/Portfolio/footer/footer.component";
import { NgxPrintModule } from 'ngx-print';
import { LucideAngularModule, ArrowUp } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { CurriculumVitaeComponent } from "./Components/Portfolio/curriculum-vitae/curriculum-vitae.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, AboutComponent,
                NgxPrintModule,
                HomeComponent,
                MatIconModule, 
                RouterModule, 
                StatisticsComponent, 
                CoreTechComponent, 
                MyWorksComponent, 
                EducationExperienceComponent, 
                GetTouchComponent, 
                FooterComponent, 
                LucideAngularModule, 
                CurriculumVitaeComponent],
})
export class AppComponent implements OnInit {

  readonly ArrowUp = ArrowUp;
  isShowScrollToTop = false;
  private scrollHeightThreshold = 400;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isShowScrollToTop = scrollPosition > this.scrollHeightThreshold;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  downloadPDF() {
    throw new Error('Method not implemented.');
  }
  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.saveTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}
