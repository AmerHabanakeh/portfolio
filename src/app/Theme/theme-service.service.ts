import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = true;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      // localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      // localStorage.setItem('theme', 'light');
    }
  }

  saveTheme() {
    // const savedTheme = localStorage?.getItem('theme');

    // if (savedTheme === 'dark') {
    //   this.isDarkMode = true;
    //   document.documentElement.classList.add('dark');
    // } else {
    //   this.isDarkMode = false;
    //   document.documentElement.classList.remove('dark');
    // }
  }
}
