import { Education } from 'src/app/model/education';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edu-info-modal',
  templateUrl: './edu-info-modal.component.html',
  styleUrls: ['./edu-info-modal.component.css']
})
export class EduInfoModalComponent {
  @Input() education!: Education
  form!:FormGroup;
  Education:Education = new Education( "", "", "", "", "", 0, 0); 
  
  constructor(private formBuilder:FormBuilder, private datosPortfolio:PortfolioService, private router:Router) {
    this.form = this.formBuilder.group(this.Education);
  }

  ngOnInit(): void {
    this.education = this.Education; 
    this.form = this.formBuilder.group(this.education);
  }

  onSubmit(event:Event) {
    event.preventDefault;
    let apiCall: Observable<any>;

    if (this.education.ideducation) {
      console.log(this.education)
      apiCall = this.datosPortfolio.modifyEdu(this.education);
    } else {
      apiCall = this.datosPortfolio.newEdu(this.form.value);
    }
    apiCall.subscribe(data => {
      this.education = new Education( "", "", "", "", "", 0, 0);
      window.location.reload();
    })
  }
}
