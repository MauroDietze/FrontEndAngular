import { AuthenticationService } from './../../services/authentication.service';
import { Person } from 'src/app/model/person';
import { PortfolioService } from './../../services/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  person:Person = new Person( "", "", "", new Date, "", 0, "", "", "", "", ""); 
  form!:FormGroup;

  constructor(private formBuilder:FormBuilder, private datosPortfolio:PortfolioService, private AuthenticationService:AuthenticationService) {
    this.form = this.formBuilder.group({
      deviceInfo: this.formBuilder.group({
        deviceId: ["17867868768"],
        deviceType: ["DEVICE_TYPE_ANDROID"],
        notificationToken:["67657575eececc34"]
      })
    })
  }

  ngOnInit(): void {
    this.datosPortfolio.fyndPerson().subscribe(data =>{
      this.person=data[0];
    });
  }

  isLoggedIn() {
    return sessionStorage.getItem('currentUser');
  }

  logout() {
    this.AuthenticationService.LogoutSession(this.form.value).subscribe(data => {window.location.reload()});
  }

}

