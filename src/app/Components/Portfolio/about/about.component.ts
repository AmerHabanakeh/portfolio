import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LucideAngularModule, MapPin, Calendar, Flag, GraduationCap, MessageCircleHeart, Building2 } from 'lucide-angular';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatIconModule, LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly MapPin = MapPin;
  readonly Calendar = Calendar;
  readonly Flag = Flag;
  readonly GraduationCap = GraduationCap;
  readonly MessageCircleHeart = MessageCircleHeart;
  readonly Building2 = Building2;

  profile = {
    name: 'Abo',
    lastName: 'ut me',
    description: `
      I am an Front End Developer with an entrepreneurial spirit, a knack for Website develop, and a passion for coding.
      Born in Syria, where I work as a Front End developer for JOYBOX, alongside my many ongoing projects.
      
      Outside of work, I am an avid Cars enthusiast, I love to travel and lead a beautiful lifestyle.
    `,
    location: 'Syria, Damascus',
    age: this.calculateAge("2002-09-21"),
    nationality: 'Syria, Damascus',
    interests: ['Cars', 'Travel', 'Programming'],
    study: 'Arab International University | AIU',
    employment: 'JOYBOX',
    profileImage: './assets/images/me2.jpg',
  };

  calculateAge(dob: string): number {
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    // Adjust if the birthday hasn't occurred yet this year
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
      age--;
    }

    return age;
  }

}
