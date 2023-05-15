import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/model/skills';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
  hardSkill: Skill = new Skill( "", "Hard", "");
  softSkill: Skill = new Skill( "", "Soft", "");

  skillsSList:Array<Skill> = new Array<any>();
  skillsHList:Array<Skill> = new Array<any>();
  constructor(private datosPortfolio:PortfolioService) {}

  currentUser = sessionStorage.getItem('currentUser');

  ngOnInit(): void {
    this.datosPortfolio.fyndSkills().subscribe(data =>{
      this.skillsSList = data.filter((x: Skill) => x.type === "Soft");
      this.skillsHList = data.filter((x: Skill) => x.type === "Hard");
    });
  }
  
  passSkill(skill: any): any {
    this.newItemEvent.emit(skill);
  }

  deleteSkill(skill: any): any {
    this.datosPortfolio.deleteSkill(skill).subscribe(data =>{
      window.location.reload();
    });
  }

}
