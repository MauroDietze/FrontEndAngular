import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-pers-info-modal',
  templateUrl: './pers-info-modal.component.html',
  styleUrls: ['./pers-info-modal.component.css']
})
export class PersInfoModalComponent {
  form!:FormGroup;
  person:Person = new Person( "", "", "", new Date, "", 0, "", "", "", "", ""); 
  
  constructor(private formBuilder:FormBuilder, private datosPortfolio:PortfolioService, private router:Router) {
    this.form = this.formBuilder.group(this.person);
  }

  ngOnInit(): void {
    this.datosPortfolio.fyndPerson().subscribe(data =>{
      this.person=data[0];
      this.form = this.formBuilder.group(this.person);
    });
  }
  
  onSubmit(event:Event) {
    event.preventDefault;
    this.datosPortfolio.modifyPerson(this.form.value).subscribe(data => {
    this.router.navigate(['/portfolio']);
    })
  }
}
