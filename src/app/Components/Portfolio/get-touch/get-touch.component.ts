import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { LoaderComponent } from "../../Shared/loader/loader.component";
import { HotToastService } from '@ngneat/hot-toast';
import { LucideAngularModule, MapPin, Mail, Github, Instagram, Linkedin } from 'lucide-angular';
@Component({
  selector: 'app-get-touch',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LoaderComponent, LucideAngularModule],
  templateUrl: './get-touch.component.html',
  styleUrl: './get-touch.component.scss'
})
export class GetTouchComponent {

  contactForm: FormGroup;
  loader: boolean = false;

  constructor(private fb: FormBuilder, private toastr: HotToastService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.sendEmail();
    } else {
      console.log('Form is invalid');
    }
  }

  sendEmail() {
    this.loader = true;
    const emailParams = {
      name: this.contactForm.get('name')?.value,
      email: this.contactForm.get('email')?.value,
      message: this.contactForm.get('message')?.value
    };

    emailjs.send('service_5oop32x', 'template_csy2it6', emailParams, 'VIs_czPuzxr-5Lw-A')
      .then((result: EmailJSResponseStatus) => {

        this.loader = false;
        this.toastr.success('Email Sent Successfully');
      }, (error: any) => {
        this.loader = false
        this.toastr.error('Email Sent Failed');
      });
  }


  contactMeDescription = " Have a project for me? Any questions about something I've built? I'd love to hear from you, give me a shout by email or by using the form below if you'd like to get in contact with me."

  contactInfo = [
    { icon: MapPin, text: ' Syria, Damascus', link: "#" },
    { icon: Mail, text: ' Amer Habanakeh Al Midani', link: 'mailto:amer.hm.syr@gmail.com' },
    { icon: Github, text: 'AmerHabanakeh', link: 'https://github.com/AmerHabanakeh' },
    { icon: Instagram, text: 'Amer_Habanakeh', link: 'https://www.instagram.com/amer.habanakeh' },
    { icon: Linkedin, text: 'Amer Habanakeh', link: 'https://www.linkedin.com/in/amer-habanakeh-0928b7301' },
  ];


}
