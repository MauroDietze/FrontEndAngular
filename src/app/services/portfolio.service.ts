import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:String="http://localhost:9004";
  constructor(private http:HttpClient) { }

  //---- Person ----//
  fyndPerson():Observable<any> {
    return this.http.get(this.url + "/ver/personas")
  }

  modifyPerson(data:any):Observable<any> {
    return this.http.put<any>(`${this.url}/modify/person/${data.id}`, data)
  }
  
  //---- Experience ----//
  fyndExp():Observable<any> {
    return this.http.get(this.url + "/ver/experience")
  }
  
  newExp(data:any):Observable<any> {
    return this.http.post<any>(`${this.url}/new/experience`, data)
  }
  
  modifyExp(data:any):Observable<any> {
    return this.http.put<any>(`${this.url}/modify/experience/${data.id}`, data)
  }

  deleteExp(data:any):Observable<any> {
    console.log("data: ", data)
    return this.http.delete<any>(`${this.url}/delete/experience/${data.id}`, data)
  }

  //---- Education ----//
  fyndEdu():Observable<any> {
    return this.http.get(this.url + "/ver/education")
  }

  newEdu(data:any):Observable<any> {
    return this.http.post<any>(`${this.url}/new/education`, data)
  }

  modifyEdu(data:any):Observable<any> {
    console.log(data)
    return this.http.put<any>(`${this.url}/modify/education/${data.ideducation}`, data)
  }

  deleteEdu(data:any):Observable<any> {
    console.log("data: ", data)
    return this.http.delete<any>(`${this.url}/delete/education/${data.ideducation}`, data)
  }

  //---- Skills ----//
  fyndSkills():Observable<any> {
    return this.http.get(this.url + "/ver/skills")
  }
  
  newSkill(data:any):Observable<any> {
    return this.http.post<any>(`${this.url}/new/skill`, data)
    console.log("sale")
  }

  modifySkill(data:any):Observable<any> {
    return this.http.put<any>(`${this.url}/modify/skill/${data.idskills}`, data)
    console.log("sale  modify")
  }

  deleteSkill(data:any):Observable<any> {
    return this.http.delete<any>(`${this.url}/delete/skill/${data.idskills}`, data)
  }

  //---- Projects ----//
  fyndProjects():Observable<any> {
    return this.http.get(this.url + "/ver/projects")
  }

  newProjects(data:any):Observable<any> {
    return this.http.post(`${this.url}/new/project`, data)
  }

  modifyProject(data:any):Observable<any> {
    return this.http.put<any>(`${this.url}/modify/project/${data.id}`, data)
  }

  deleteProject(data:any):Observable<any> {
    return this.http.delete<any>(`${this.url}/delete/Project/${data.id}`, data)
  }
}
