import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../services/portfolio.service';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  person:Person = new Person( "", "", "", new Date, "", 0, "", "", "", "", ""); 
  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.fyndPerson().subscribe(data =>{
      this.person=data[0];
    });
  }
  
}
