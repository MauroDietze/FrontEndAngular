import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init-session',
  templateUrl: './init-session.component.html',
  styleUrls: ['./init-session.component.css']
})
export class InitSessionComponent implements OnInit {
  form!:FormGroup;
  constructor(private formBuilder:FormBuilder, private AuthenticationService:AuthenticationService, private router:Router) {
    this.form = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
      deviceInfo: this.formBuilder.group({
        deviceId: ["17867868768"],
        deviceType: ["DEVICE_TYPE_ANDROID"],
        notificationToken:["67657575eececc34"]
      })
    })
  }

  ngOnInit(): void {
  }

  get email(): any {
    return this.form.get('email');
  }
  
  get password(): any {
    return this.form.get('password');
  }

  onSubmit(event:Event) {
    event.preventDefault;
    this.AuthenticationService.InitSession(this.form.value).subscribe(data => {window.location.reload();})
    
  }
}
