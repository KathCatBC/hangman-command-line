var inquirer = require('inquirer');
var Student = require('./letter');
var Clas = require('./word');

var newClass;

inquirer.prompt([
  {type: "input",
    name: "letter",
    message: "Pick a letter."},
  
]).then(function(data){
	  // var students = [];
   //    newClass = new Clas([], data.subject, data.capacity);

   //    askToAddStudent();

   console.log(data.letter)

});

// function newStudent(){
// 	inquirer.prompt([
// 	  {type: "input",
// 	    name: "sName",
// 	    message: "What's your student's name?"}

// 	]).then(function(data){
// 	      var newStudent = new Student(data.sName);
// 	      newClass.addStudent(newStudent);

// 	      console.log(newClass);
	      
// 	      askToAddStudent();
// 	});
// }

// function askToAddStudent(){
// 	inquirer.prompt([
// 	  {type: "input",
// 	    name: "addStudents",
// 	    message: "Do you want to add students to that class?"}

// 	]).then(function(data){
// 	      if (data.addStudents == 'yes'){
// 	      	newStudent();
// 	      }else{
// 	      	console.log(newClass);
// 	      }
// 	});
// }
