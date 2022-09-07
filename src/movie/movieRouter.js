const { Router } = require("express")
const movieRouter = Router()
const { listMovies, addMovie, deleteMovie, updateMovie } = require("./movieController")
const { tokenCheck } = require("../middleware");

movieRouter.post("/movie/add", tokenCheck, addMovie);
movieRouter.get("/movie/list", listMovies);
movieRouter.delete("/movie/delete", tokenCheck, deleteMovie); 
movieRouter.put("/movie/update", tokenCheck, updateMovie); 

module.exports = movieRouter;