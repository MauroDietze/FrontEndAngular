import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/model/skills';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skill-info-modal',
  templateUrl: './skill-info-modal.component.html',
  styleUrls: ['./skill-info-modal.component.css']
})
export class SkillInfoModalComponent {
  @Input() skill!: Skill
  form!:FormGroup;
  Skill: Skill = new Skill( "", "", "");
  type!: boolean
  
  constructor(private formBuilder:FormBuilder, private datosPortfolio:PortfolioService) {
    this.form = this.formBuilder.group(this.Skill);
  }

  ngOnInit(): void {
    this.skill = this.Skill;
    this.form = this.formBuilder.group(this.Skill);
  }

  isType(){
    return this.skill.type == "Hard" ? true : false;
  }


  onSubmit(event:Event) {
    event.preventDefault;
    let apiCall: Observable<any>;
    
    this.form.patchValue({
      type: this.skill.type
    })

    if (this.skill.idskills) {
      apiCall = this.datosPortfolio.modifySkill(this.skill);
    } else {
      apiCall = this.datosPortfolio.newSkill(this.form.value);
    }
    apiCall.subscribe(data => {
      this.skill = new Skill( "", "", "");
      window.location.reload();
    })
  }
}
