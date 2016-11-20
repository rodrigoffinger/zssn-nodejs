function setup(app, handlers) {
	app.get("/", function(req, res){ res.json({status: "ZSSN API" })});
    app.post('/api/survivors', handlers.survivor.createSurvivor);
	app.get('/api/survivors/:name', handlers.survivor.getSurvivor);
	app.put('/api/survivors/setInventory/:name', handlers.survivor.setInventory);
	app.put('/api/survivors/updatelocation/:name', handlers.survivor.updateLocation);
	app.put('/api/survivors/flagasinfected/:name', handlers.survivor.flagAsInfected);
	app.put('/api/survivors/')
}

exports.setup = setup;