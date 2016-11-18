export var SurvivorHandler = function() {
    this.createSurvivor = handleCreateSurvivor;
    this.getSurvivor = handleGetSurvivor;
    this.updateSurvivor = handleUpdateSurvivor;
    this.deleteSurvivor = handleDeleteSurvivor;
}

function handleCreateSurvivor(req, res){}

function handleGetSurvivor(req, res){
    res.json({name: "Rick", age: "40", gender: "Male", lastLocation:{lat:534.896,long:9863.54}})
}

function handleUpdateSurvivor(req, res){}

function handleDeleteSurvivor(req, res){}