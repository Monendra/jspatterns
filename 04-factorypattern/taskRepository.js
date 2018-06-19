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

module.exports = repo(); // You can choose whichever module you want to expose.
