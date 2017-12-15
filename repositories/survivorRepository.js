var fs = require('fs');
var Q = require('q');
var _ = require('underscore');
var Survivor = require('../models/survivor.js');

var db;
loadDb();

function SurvivorRepository() {
    this.createSurvivor = createSurvivor;
    this.updateSurvivor = updateSurvivor;
	this.findSurvivorByName = findSurvivorByName;	
}

function createSurvivor(name, age, gender, lastLocation){
    var deferred = Q.defer();    
    var survivor = new Survivor(name, age, gender, lastLocation);
    db.Survivors[name] = survivor;
    saveDb(function(err){
        if (err){
            deferred.reject(new Error(err));
        } else {
            deferred.resolve(survivor);
        }
    });
    return deferred.promise;
}

function updateSurvivor(survivor){
    var deferred = Q.defer();
    var survivor = db.Survivors[survivor.name];
    if (!survivor){
        deferred.reject(new Error("Survivor don't exists."));
    } else {
        db.Survivors[survivor.name] = survivor;
        saveDb(function(err){
            if (err){
                deferred.reject(new Error(err));
            } else {
                deferred.resolve(survivor);
            }
        });
    }
    return deferred.promise;
}

function findSurvivorByName(name) {
    var survivor = db.Survivors[name];
    return survivor;
}

function loadDb(){
    var exists = fs.existsSync('db.json');
    if (exists) {
        console.log('loading database file');
        var txt = fs.readFileSync('db.json', 'utf8');
        db = JSON.parse(txt);        
    } else {
        console.log('No data');
        db = {
            Survivors: {}
        };
    }
}

function saveDb(saveFinished){
    var json = JSON.stringify(db, null, 2);
    fs.writeFile('db.json', json, 'utf8', finished);
    function finished(err) {
        saveFinished(err);
    }
}

module.exports = SurvivorRepository;