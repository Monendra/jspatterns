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

console.log(task.toString());