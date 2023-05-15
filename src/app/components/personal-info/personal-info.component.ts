import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../services/portfolio.service';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  person: Person = new Person( "", "", "", new Date, "", 0, "", "", "", "", ""); 
  constructor(private datosPortfolio:PortfolioService) {}

  currentUser = sessionStorage.getItem('currentUser');

  ngOnInit(): void {
    this.datosPortfolio.fyndPerson().subscribe(data =>{
      this.person=data[0];
    });
  }
}
