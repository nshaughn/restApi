const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
    try {
        if (req.body.title && req.body.actor) {
            console.log(req.body);
            await Movie.create({ title: req.body.title, actor: req.body.actor });
            res.status(201).send({ title: req.body.title, actor: req.body.actor });
        } else {
            console.log("No title or actor found");
            res.status(400).send({ error: error.message });
        }
    } catch (error) {
        console.log("Error in addMovie");
        res.status(500).send({ error: error.message });
        console.log(error);
    }
};

exports.listMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        if (movies.length > 0) {
            console.log("listMovies");
            res.status(200).send({ movies });
        } else {
            console.log("No movies");
            res.status(400).send({ error: "No movies" });
        }
    } catch (error) {
        console.log("Error in listMovies");
        res.status(500).send({ error: error.message });
        console.log(error);
    }
}

exports.deleteMovie = async (req, res) => {
    try {
        let findMovies = await Movie.find({})
        console.log(findMovies);
        if (( req.body.title && req.body.actor ) && findMovies.length > 0) {
            await Movie.deleteOne({ title: req.body.title, actor: req.body.actor})
            res.status(200).send(await Movie.find({}));
        } else {
            console.log("Nothing to delete");
            res.status(400).send({ error: error.message })
        }
    } catch (error) {
        console.log("Error in deleteMovie")
        res.status(500).send({ error: error.message })
        console.log(error)
    }
}

exports.updateMovie = async (req, res) => {
    try {
        await Movie.updateOne ({ title: req.body.title, actor: req.body.actor}, { title: req.body.newTitle, actor: req.body.newActor});
        res.status(200).send(await Movie.find({}))
    } catch (error) {
        res.status(200).send(console.log("Failed to list items"))
        console.log(error)
    }
}



