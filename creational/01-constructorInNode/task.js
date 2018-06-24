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

module.exports = Task;
