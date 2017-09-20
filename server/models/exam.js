let mongoose = require('mongoose');
let ExamSchema = mongoose.Schema({
	name: {type:String, required:true},
	stack: {type:String, required:true},
	difficultyLevel: {type: Number},
	blackBelts: {type:Number}
});
mongoose.model('Exam', ExamSchema);