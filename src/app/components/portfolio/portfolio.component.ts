import { Education } from './../../model/education';
import { Component } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { Project } from 'src/app/model/projects';
import { Skill } from 'src/app/model/skills';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  experience!: Experience;
  education!: Education;
  skill!: Skill;
  project!: Project;
  

  passExp(data: Experience) {
    this.experience = {...data};
  }

  passEdu(data: Education) {
    this.education = {...data};
  }

  passSkill(data: Skill) {
    this.skill = {...data};
  }

  passType(type: string): any {
    this.skill = new Skill( "", type, "");
  }

  passProject(data: Project) {
    this.project = {...data};
  }  
}
