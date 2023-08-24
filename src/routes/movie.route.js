const { createMovie, getMovies, getMovie, updateMovie, deleteMovie } = require("../controllers/movie.controller");
const { verifyIdParam } = require("../middlewares/generic.middlware");
const { verifyCreateMovieBody: verifyCreateTicketBody, verifyUpdateMovieBody } = require("../middlewares/movie.middleware");





module.exports =  function(app){

    app.post("/mba/api/v1/movies",[verifyCreateTicketBody],createMovie);
    app.get("/mba/api/v1/movies",[], getMovies);
    app.get("/mba/api/v1/movies/:id",[verifyIdParam], getMovie);
    app.put("/mba/api/v1/movies/:id",[verifyIdParam, verifyUpdateMovieBody], updateMovie);
    app.delete("/mba/api/v1/movies/:id",[verifyIdParam], deleteMovie);

}