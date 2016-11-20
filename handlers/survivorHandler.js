var SurvivorRepository = require('../repositories/survivorRepository.js');

var SurvivorHandler = function() {
    this.createSurvivor = handleCreateSurvivor;
    this.getSurvivor = handleGetSurvivor;
    this.setInventory = handleSetInventory;
    this.updateLocation = handleUpdateLocation;
    this.flagAsInfected = handleFlagAsInfected;
}

function handleCreateSurvivor(req, res){
    console.log('handleCreateSurvivor-body:');
    console.log(req.body);
    var name = req.body.name || null;
	var age = req.body.age || null;
	var gender = req.body.gender || null;
	var lastLocation = req.body.lastLocation || null;
	var survivorRepository = new SurvivorRepository();
	survivorRepository.createSurvivor(name, age, gender, lastLocation)
	.then(
		function (survivor) {
			console.log('info', 'Survivor ' + name + ' has been created.' +
				'Request from address ' + req.connection.remoteAddress + '.');
			res.status(201).json(survivor);
		},
		function (err) {
			console.log('error', 'An error has occurred while processing a request to create an ' +
				'survivor from ' + req.connection.remoteAddress + '. Stack trace: ' + err.stack);
			res.status(400).json({
				error: err.message
			});
		}
	);
}

function handleGetSurvivor(req, res){
    console.log('handleGetSurvivor-param > ' + req.params.name);
    var survivorRepository = new SurvivorRepository();
    console.log('handleGetSurvivor-survivorRepository > ' + survivorRepository.findSurvivorByName);
    var survivor = survivorRepository.findSurvivorByName(req.params.name);
    res.status(201).json(survivor);
}

function handleSetInventory(req, res){
    console.log('handleSetInventory-param > ' + req.params.name);
    console.log(req.body);
    res.json({Success: true});
}

function handleUpdateLocation(req, res){
    console.log('handleUpdateLocation-param > ' + req.params.name);
    console.log(req.body);
    res.json({Success: true});
}

function handleFlagAsInfected(req, res){
    console.log('handleFlagAsInfected-param > ' + req.params.name);
    res.json({Success: true});
}

module.exports = SurvivorHandler;