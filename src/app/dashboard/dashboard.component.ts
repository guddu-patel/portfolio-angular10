import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from '../service/api-handler.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as alertify from 'alertify.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  constructor(private api: ApiHandlerService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.messageForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
      message: ['', [Validators.required]]
    })
  }
  submitMessage() {
    this.submitted = true;
    // console.log("value", this.messageForm.value);
    if (this.messageForm.valid)
      this.api.post('/contact/email', this.messageForm.value).subscribe(data => {
        console.log('message sent', data);
        alertify.success("Message sent, I will contact you soon.");
        this.submitted = false;
        this.messageForm.reset();
      })
  }
  get f() { return this.messageForm.controls; }
}
