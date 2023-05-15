import { Project } from 'src/app/model/projects';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-info-modal',
  templateUrl: './project-info-modal.component.html',
  styleUrls: ['./project-info-modal.component.css']
})
export class ProjectInfoModalComponent {
  @Input() project!: Project;
  form!:FormGroup;
  Project:Project = new Project( "", "", 0, ""); 
  
  constructor(private formBuilder:FormBuilder, private datosPortfolio:PortfolioService) {
    this.form = this.formBuilder.group(this.Project);
  }

  ngOnInit(): void {
    this.project = this.Project; 
    this.form = this.formBuilder.group(this.Project);
  }

  onSubmit(event:Event) {
    event.preventDefault;
    let apiCall: Observable<any>;

    if (this.project.idachivements) {
      apiCall = this.datosPortfolio.modifyProject(this.form.value);
    } else {
      apiCall = this.datosPortfolio.newProjects(this.form.value);
    }
    apiCall.subscribe(data => {
      this.project = new Project( "", "", 0, "");
      window.location.reload();
    })
  }
}
