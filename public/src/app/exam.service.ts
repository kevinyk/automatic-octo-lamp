import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ExamService {

  constructor(private _http:Http) { }
  addExam(exam){
  	console.log("in examService's addExam method");
  	return this._http.post('/exams', exam).map(Response=>Response.json()).toPromise();
  }
  getExams(){
  	console.log("in examService's getExams method");
  	return this._http.get('/exams').map(Response=>Response.json()).toPromise();
  }
}
