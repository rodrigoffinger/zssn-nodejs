export function setup(app, handlers) {
	app.get("/", (req, res) => res.json({status: "ZSSN API"}));
    app.post('/api/survivors', handlers.survivor.createSurvivor);
	app.get('/api/survivors/:name', handlers.survivor.getSurvivor);
	app.put('/api/survivors/:name', handlers.survivor.updateSurvivor);
	app.delete('/api/survivors/:name', handlers.survivor.deleteSurvivor);	
}