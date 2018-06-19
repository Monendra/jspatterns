var repo = function(){
	var DBconnection = "Private variable to this object will not be visible to any other place.";
	return {
		get: function(id) {
			console.log('Getting task' + id);
			return{
				name: 'new task from DB'
			}
		},
		save: function(task){
			console.log('Saving ' + task.name + ' to the DB.')
		}
	}
}

// Above code can also be achieved by revealing model which is more clear and also considered as module pattern.
var repoReveal = function(){
	
	var DBconnection = "Private variable to this object will not be visible to any other place.";
	
	var get = function(id) {
		console.log('Getting task' + id);
		return{
			name: 'new task from DB Reporeveal'
		}
	}
	
	var save = function(task){
		console.log('Saving ' + task.name + ' to the DB.')
	}
	
	return {
		get: get ,
		save:save 
	}
}

module.exports = repo(); // You can choose whichever module you want to expose.
