let Exams = require('./../controllers/exams');
module.exports = (app)=>{
	app.get('/exams', Exams.index);
	app.post('/exams', Exams.create);
}