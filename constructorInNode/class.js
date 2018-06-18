//Create a class with constructor as per Ecmascript2015
class Task {
	constructor(name){
		this.name = name;
		this.completed = false;
	};
	
	complete(){
		console.log('completing task: ' + this.name);
		this.completed = true;
	};
	
	save() {
		console.log('Saving task : ' + this.name);
	};
	
}

var task1 = new Task('Create a demo for constructor');
var task2 = new Task('Create a demo for modules');
var task3 = new Task('Create a demo for singleton');
var task4 = new Task('Create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();