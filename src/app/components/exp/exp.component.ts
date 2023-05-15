
import { PortfolioService } from './../../services/portfolio.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Experience } from 'src/app/model/experience';



@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>(); 
  

  experienceList:Array<Experience> = new Array<any>();
  constructor(private datosPortfolio:PortfolioService) {}

  currentUser = sessionStorage.getItem('currentUser');

  ngOnInit(): void {
    this.datosPortfolio.fyndExp().subscribe(data =>{
      console.log("experienceList: ", data)
      this.experienceList=data;
    });
  }

  passExp(exprience: any): any {
    this.newItemEvent.emit(exprience);
  }

  deleteExp(exprience: any): any {
    this.datosPortfolio.deleteExp(exprience).subscribe(data =>{
      console.log(exprience);
      window.location.reload();
    });
  }
}
