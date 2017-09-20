import { Component, OnInit } from '@angular/core';
import { ExamService } from './../exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
	// you can use a class to refactor later
  errors: string[] = [];
  newExam: object = {name: "", difficultyLevel: 0, blackBelts: 0, stack: "MEAN"}
  exams: object[] = [];
  constructor(private _examService:ExamService) { 
  }

  ngOnInit() {
  	this._examService.getExams()
  	.then((data)=>{
  		console.log("then");
  		console.log(data);
  		this.exams = data;
  	})
  	.catch((err)=>{
  		console.log("catch");
  		console.log(err);
  	})
  }
  onSubmit(){
  	console.log("in exam.component onSubmit");
  	this._examService.addExam(this.newExam)
  	.then((data)=>{
  		console.log("then");
  		if(data.errors){
  			this.errors = [];
  			for (var key in data.errors){
  				this.errors.push(data.errors[key].message);
  			}
  		}
  		console.log(data);
  	})
  	.catch((err)=>{
  		console.log("catch");
  		console.log(err);
  	})
  }

}
