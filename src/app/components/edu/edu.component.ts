import { Router } from '@angular/router';
import { PortfolioService } from './../../services/portfolio.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Education } from 'src/app/model/education';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();

  educationList:Array<Education> = new Array<Education>();
  constructor(private datosPortfolio:PortfolioService, private router:Router) {}

  currentUser = sessionStorage.getItem('currentUser');
  
  ngOnInit(): void {
    this.datosPortfolio.fyndEdu().subscribe(data =>{
      console.log("educationList: ", data)      
      this.educationList=data;
    });
  }

  passEdu(education: any): any {
    this.newItemEvent.emit(education);
  }

  deleteEdu(education: any): any {
    this.datosPortfolio.deleteEdu(education).subscribe(data =>{
      console.log("data: ", data)
      window.location.reload();
    });
  }
}
