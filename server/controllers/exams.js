let mongoose = require('mongoose');
let Exam = mongoose.model("Exam");

module.exports = {
	index: (req,res)=>{
		console.log("hit exams.index");
		Exam.find().exec((err,exams)=>{
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("gottem");
				res.json(exams);
			}
		})
	},
	create: (req,res)=>{
		console.log("hit exams.create");
		Exam.create(req.body, (err, createdExam)=>{
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("successfully created exam");
				res.json(createdExam);
			}
		})
	}
}