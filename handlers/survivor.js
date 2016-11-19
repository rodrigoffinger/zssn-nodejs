var SurvivorHandler = function() {
    this.createSurvivor = handleCreateSurvivor;
    this.getSurvivor = handleGetSurvivor;
    this.updateLocation = handleUpdateLocation;
}

function handleCreateSurvivor(req, res){
    console.log('handleCreateSurvivor-body:');
    console.log(req.body);
    res.json({Success: true});
}

function handleGetSurvivor(req, res){
    console.log('handleGetSurvivor-param > ' + req.params.name);
    res.json({name: "Rick", age: "40", gender: "Male", lastLocation:{lat:534.896,long:9863.54}})
}

function handleUpdateLocation(req, res){
    console.log('handleUpdateLocation-param > ' + req.params.name);
    console.log(req.body);
    res.json({Success: true});
}

module.exports = SurvivorHandler;