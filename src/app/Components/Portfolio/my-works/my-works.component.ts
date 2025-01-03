import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-my-works',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './my-works.component.html',
  styleUrl: './my-works.component.scss'
})
export class MyWorksComponent {

  projects = [
    {
      url: "https://github.com/AmerHabanakeh/Angular-Market",
      imageURL: './assets/images/superMarket.jpg',
      name: 'Angular Market',
      frameWorkIcon: ["./assets/images/html-5-svgrepo-com.svg", "./assets/images/css-3-svgrepo-com.svg", "./assets/images/angular-svgrepo-com.svg"]
    },
    {
      url: "https://github.com/AmerHabanakeh/AdminUserTask",
      imageURL: './assets/images/task.webp',
      name: 'Admin User Tasks',
      frameWorkIcon: ["./assets/images/html-5-svgrepo-com.svg", "./assets/images/css-3-svgrepo-com.svg", "./assets/images/angular-svgrepo-com.svg"]
    },
    {
      url: "https://github.com/AmerHabanakeh/Angular-ECommerce",
      imageURL: './assets/images/e-commerce.webp',
      name: 'Angular E-Commerce',
      frameWorkIcon: ["./assets/images/html-5-svgrepo-com.svg", "./assets/images/css-3-svgrepo-com.svg", "./assets/images/angular-svgrepo-com.svg", "./assets/images/node-js-svgrepo-com.svg"]
    },
    {
      url: "https://github.com/AmerHabanakeh/React_Project1",
      imageURL: './assets/images/e-commerce.webp  ',
      name: 'React Project 1 ',
      frameWorkIcon: ["./assets/images/html-5-svgrepo-com.svg", "./assets/images/css-3-svgrepo-com.svg", "./assets/images/react-javascript-js-framework-facebook-svgrepo-com.svg"]
    }
  ]
}
