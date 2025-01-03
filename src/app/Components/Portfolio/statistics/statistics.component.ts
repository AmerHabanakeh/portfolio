import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { LucideAngularModule, Star, SmilePlus, FlaskConical, PanelsTopLeft } from 'lucide-angular';


@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, HttpClientModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent implements OnInit {
  readonly Star = Star
  readonly SmilePlus = SmilePlus
  readonly FlaskConical = FlaskConical
  readonly PanelsTopLeft = PanelsTopLeft

  starsCount = 0;
  stargazersData!: any;
  projects !: any;
  ngOnInit(): void {
    this.getStarsFromMyGit()
  }

  constructor(private http: HttpClient) {
  }

  getStarsFromMyGit() {
    this.http.get(`https://api.github.com/users/AmerHabanakeh/repos`).subscribe((res: any) => {
      this.projects = res.length; // Number of projects
      this.stargazersData = res.reduce((total: number, obj: any) => total + obj.stargazers_count, 0); // Sum of stars
      this.updateStats(); 
    });
  }

  updateStats() {
    this.stats = [
      { icon: Star, label: 'Github stars', value: this.stargazersData },
      { icon: SmilePlus, label: 'Happy clients', value: 2 },
      { icon: FlaskConical, label: 'Years of experience', value: 2 },
      { icon: PanelsTopLeft, label: 'Projects', value: this.projects }
    ];
  }

  stats = [
    { icon: Star, label: 'Github stars', value: 0 },
    { icon: SmilePlus, label: 'Happy clients', value: 2 },
    { icon: FlaskConical, label: 'Years of experience', value: 2 },
    { icon: PanelsTopLeft, label: 'Projects', value: 0 }
  ];


}
