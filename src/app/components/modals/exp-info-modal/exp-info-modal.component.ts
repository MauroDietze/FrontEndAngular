import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Experience } from 'src/app/model/experience';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-exp-info-modal',
  templateUrl: './exp-info-modal.component.html',
  styleUrls: ['./exp-info-modal.component.css']
})
export class ExpInfoModalComponent {
  @Input() experience!: Experience
  form!:FormGroup;
  Experience:Experience = new Experience( "", "", "", "", "", new Date, new Date); 
  
  constructor(private formBuilder:FormBuilder, private datosPortfolio:PortfolioService) {
    this.form = this.formBuilder.group(this.Experience);
  }

  ngOnInit(): void {
    this.experience = this.Experience; 
    this.form = this.formBuilder.group(this.Experience);
  }

  onSubmit(event:Event) {
    event.preventDefault;
    let apiCall: Observable<any>;

    if (this.experience.id) {
      apiCall = this.datosPortfolio.modifyExp(this.experience);
    } else {
      apiCall = this.datosPortfolio.newExp(this.form.value);
    }
    apiCall.subscribe(data => {
      this.experience = new Experience( "", "", "", "", "", new Date, new Date);
      window.location.reload();
    })
  }
}
