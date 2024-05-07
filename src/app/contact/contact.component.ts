import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    telephone: new FormControl(null, Validators.required),
    message: new FormControl(null, Validators.required)
  });

  constructor(private router: Router) {}

  sendEmail() {
    if (this.contactForm.invalid) {
      return;
    }
    this.router.navigate(['/success']);
  }


}
