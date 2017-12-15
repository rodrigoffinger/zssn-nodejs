var SurvivorRepository = require('../repositories/survivorRepository.js');

var SurvivorHandler = function() {
    this.createSurvivor = handleCreateSurvivor;
    this.getSurvivor = handleGetSurvivor;
    this.updateInventory = handleUpdateInventory;
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
    if (survivor) {
        console.log('info', 'Survivor ' + req.params.name + ' has been retrieved.' +
            'Request from address ' + req.connection.remoteAddress + '.');
        res.json(200, survivor);
    }
    else {
        console.log('info', 'Could not retrieve survivor ' + req.params.name + ', no ' +
            'such name exists. Request from address ' + req.connection.remoteAddress + '.');
        res.json(404, {
            error: "No survivor found matching name " + req.params.name
        });
    }
}

function handleUpdateInventory(req, res){
    console.log('updateInventory-param > ' + req.params.name);
    console.log(req.body);
    res.json({Success: true});
}

function handleUpdateLocation(req, res){
    console.log('handleUpdateLocation-param > ' + req.params.name);
    console.log(req.body);
    // var survivorRepository = new SurvivorRepository();
    // var survivor = survivorRepository.findSurvivorByName(req.params.name);
    // if (survivor){
    //     survivor.lastLocation = req.body;
    //     survivorRepository.updateSurvivor(survivor)
    //     .then(
    //         function (survivor) {
    //             console.log('info', 'Survivor ' + name + ' has been created.' +
    //                 'Request from address ' + req.connection.remoteAddress + '.');
    //             res.status(201).json(survivor);
    //         },
    //         function (err) {
    //             console.log('error', 'An error has occurred while processing a request to create an ' +
    //                 'survivor from ' + req.connection.remoteAddress + '. Stack trace: ' + err.stack);
    //             res.status(400).json({
    //                 error: err.message
    //             });
    //         }
    //     );
    // } else {
    //     res.status(400).json({error: "Survivor don't exists"});
    // }
    res.status(200).json({Success: true});
}

function handleFlagAsInfected(req, res){
    console.log('handleFlagAsInfected-param > ' + req.params.name);
    console.log(req.body);
    res.status(200).json({Success: true});
}

module.exports = SurvivorHandler;