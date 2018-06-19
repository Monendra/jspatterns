var taskHandler = require('./taskhandler');
var myrepo = require('./repo');

myrepo.save('from main.js file');
myrepo.save('from main.js file');
myrepo.save('from main.js file');
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();

//Nodejs uses commonJS framework which cache the instance of each object executed first time. If you want it to instanctiate again and again,
// then you need to export it.