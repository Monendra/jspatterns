//Create an object with the constructor
var Task = function(name){
	this.name = name;
	this.completed = false;
}

// Symantics of the prototypes are as follows:
// ClassName.prototype.methodName = function (arguments){};

Task.prototype.complete = function (){
	console.log('completing task: ' + this.name);
	this.completed = true;
}

Task.prototype.save = function() {
	console.log('Saving task : ' + this.name);
}

var task1 = new Task('Create a demo for constructor');
var task2 = new Task('Create a demo for modules');
var task3 = new Task('Create a demo for singleton');
var task4 = new Task('Create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();