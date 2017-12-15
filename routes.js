function setup(app, handlers) {
	app.get("/", function(req, res){ res.json({status: "ZSSN API" })});
    app.post('/api/survivors', handlers.survivor.createSurvivor);
	app.get('/api/survivors/:name', handlers.survivor.getSurvivor);
	app.patch('/api/survivors/updateinventory/:name', handlers.survivor.updateInventory);
	app.patch('/api/survivors/updatelocation/:name', handlers.survivor.updateLocation);
	app.patch('/api/survivors/flagasinfected/:name', handlers.survivor.flagAsInfected);
}

exports.setup = setup;