import { Component, EventEmitter, Output } from '@angular/core';
import { Project } from 'src/app/model/projects';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @Output() newItemEvent = new EventEmitter<any>(); 
    
  
  projectsList:Array<Project> = new Array<any>();
  constructor(private datosPortfolio:PortfolioService) {}

  currentUser = sessionStorage.getItem('currentUser');

  ngOnInit(): void {
    this.datosPortfolio.fyndProjects().subscribe(data =>{
      console.log("projectsList: ", data)
      this.projectsList=data;
    });
  }

  passPro(project: any): any {
    this.newItemEvent.emit(project);
  }

  deletePro(project: any): any {
    this.datosPortfolio.deleteProject(project).subscribe(data =>{
      console.log(project);
      window.location.reload();
    });
  }
}
