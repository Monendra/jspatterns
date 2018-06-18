var task = {
		title: 'My Title',
		description: 'My Description'
		
}; //one way of creating a object out of 3
//var task = Object.create(Object.prototype); // 2nd way of creating object out of 3, 3rd is by using new keyword
//var task = new Object();

// task.title = 'my title'; // we can add this directly inside the objject inside the curly braces
//task.description = 'my description';

//we can create function as well
task.toString = function(){
	return this.title + ' ' + this.description;
}

Object.defineProperty(task, 'toString', {
	value:function(){								//define the value of the property
		return this.title + ' ' + this.description;
	},
	writable: true,  //Will restrict the property to be re-assigned any other value or rewrite.
	enumerable: true,
	configurable: true // Nobody can redefine your property again
	
});

//Lets understand inheritence using object.create method
var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
	value:function(){								//define the value of the property
		return this.title + ' is urgent task ' + this.description;
	},
	writable: true,  //Will restrict the property to be re-assigned any other value or rewrite.
	enumerable: true,
	configurable: true // Nobody can redefine your property again
	
});

console.log(urgentTask.toString());