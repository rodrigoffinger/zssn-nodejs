var fs = require('fs');
var Q = require('q');
var Survivor = require('../models/survivor.js');

var db;
loadDb();

function loadDb(){
    var exists = fs.existsSync('db.json');
    if (exists) {
        console.log('loading database file');
        var txt = fs.readFileSync('db.json', 'utf8');
        db = JSON.parse(txt);
    } else {
        console.log('No data');
        db = {
            Survivors: []
        };
        db.Survivors = new Array();
    }
}

function saveDb(saveFinished){
    var json = JSON.stringify(db, null, 2);
    fs.writeFile('db.json', json, 'utf8', finished);
    function finished(err) {
        saveFinished(err);
    }
}

function SurvivorRepository() {
    this.createSurvivor = createSurvivor;
	this.findSurvivorByName = findSurvivorByName;	
}

function createSurvivor(name, age, gender, lastLocation){
    console.log('SurvivorRepository-createSurvivor:' + name);
    var deferred = Q.defer();
    
    var survivor = new Survivor(name, age, gender, lastLocation);
    db.Survivors.push(survivor);
    saveDb(function(err){
        if (err){
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(survivor);
        }
    });
    return deferred.promise;
}

function findSurvivorByName(name) {
    console.log('SurvivorRepository-findSurvivorByName:' + name);
    var survivor = db.Survivors.find(function(){
        return this.name == name;
    });
    return survivor;
}

module.exports = SurvivorRepository;