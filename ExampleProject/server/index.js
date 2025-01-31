var express = require("express");
var dao = require("./mongo-dao.js");
var app = express();
const logger = require('./logger.js');

app.use((req, res, next) => {
  res.setHeader("X-Powered-By", "Travelers Rocks!!");
  next();
});
app.use(express.json()); //Parse JSON body
app.use((req, res, next) => {
  logger.info(`Received a ${req.method} request, with code: ${res.statusCode}`);
  next();
});

app.get('/error', (req, res) => {
  const error = new Error('This is a test error');
  logger.error(`Error occurred: ${err.message}`)
});

app.get("/api/characters", (req, res) => {
  dao.findAllCharacters((err, characters) => {
    if (characters) {
      res.send(characters);
      logger.info(`Received a ${req.method} request, with code: ${res.statusCode}`)
    } else {
      res.statusCode = 404;
      logger.error(`Error with a ${req.method} request, with code: ${res.statusCode}`)
      res.end();
    }
  });
});

app.get("/api/planets", (req, res) => {
  dao.findAllPlanets((err, planets) => {
    if (planets) {
      res.send(planets);
      logger.info(`Received a ${req.method} request, with code: ${res.statusCode}`)
    } else {
      res.statusCode = 404;
      logger.error(`Error with a ${req.method} request, with code: ${res.statusCode}`)
      res.end();
    }
  });
});

app.get("/api/films", (req, res) => {
  dao.findAllFilms((err, films) => {
    if (films) {
      res.send(films);
      logger.info(`Received a ${req.method} request, with code: ${res.statusCode}`)
    } else {
      res.statusCode = 404;
      logger.error(`Error with a ${req.method} request, with code: ${res.statusCode}`)
      res.end();
    }
  });
});

app.get("/api/characters/:id", (req, res) => {
  dao.findCharacter(req.params.id, (err, character) => {
    if (character) {
      res.send(character);
      logger.info(`Received a ${req.method} request, with code: ${res.statusCode}`)
    } else {
      res.statusCode = 404;
      logger.error(`Error with a ${req.method} request, with code: ${res.statusCode}`)
      res.end();
    }
  });
});

app.get("/api/films/:id", (req, res) => {
  dao.findFilm(req.params.id, (err, film) => {
    if (film) {
      res.send(film);
      logger.info(`Received a ${req.method} request, with code: ${res.statusCode}`)
    } else {
      res.statusCode = 404;
      logger.error(`Error with a ${req.method} request, with code: ${res.statusCode}`)
      res.end();
    }
  });
});

app.get("/api/planets/:id", (req, res) => {
  dao.findPlanet(req.params.id, (err, planet) => {
    if (planet) {
      res.send(planet);
      logger.info(`Received a ${req.method} request, with code: ${res.statusCode}`)
    } else {
      res.statusCode = 404;
      logger.error(`Error with a ${req.method} request, with code: ${res.statusCode}`)
      res.end();
    }
  });
});

app.get("/api/films/:id/characters", (req, res) => {
  dao.findCharactersByFilm(req.params.id, (err, characters) => {
    if (characters) {
      res.send(characters);
      logger.info(`Received a ${req.method} request, with code: ${res.statusCode}`)
    } else {
      res.statusCode = 404;
      logger.error(`Error with a ${req.method} request, with code: ${res.statusCode}`)
      res.end();
    }
  });
});

app.get("/api/films/:id/planets", (req, res) => {
  dao.findPlanetsByFilm(req.params.id, (err, planets) => {
    if (planets) {
      res.send(planets);
      logger.info(`Received a ${req.method} request, with code: ${res.statusCode}`)
    } else {
      res.statusCode = 404;
      logger.error(`Error with a ${req.method} request, with code: ${res.statusCode}`)
      res.end();
    }
  });
});

app.get("/api/characters/:id/films", (req, res) => {
  dao.findFilmsByCharacter(req.params.id, (err, films) => {
    if (films) {
      res.send(films);
      logger.info(`Received a ${req.method} request, with code: ${res.statusCode}`)
    } else {
      res.statusCode = 404;
      logger.error(`Error with a ${req.method} request, with code: ${res.statusCode}`)
      res.end();
    }
  });
});

app.get("/api/planets/:id/films", (req, res) => {
  dao.findFilmsByPlanet(req.params.id, (err, films) => {
    if (films) {
      res.send(films);
      logger.info(`Received a ${req.method} request, with code: ${res.statusCode}`)
    } else {
      res.statusCode = 404;
      logger.error(`Error with a ${req.method} request, with code: ${res.statusCode}`)
      res.end();
    }
  });
});

app.get("/api/planets/:id/characters", (req, res) => {
  dao.findCharactersByPlanet(req.params.id, (err, characters) => {
    if (characters) {
      res.send(characters);
      logger.info(`Received a ${req.method} request, with code: ${res.statusCode}`)
    } else {
      res.statusCode = 404;
      logger.error(`Error with a ${req.method} request, with code: ${res.statusCode}`)
      res.end();
    }
  });
});

app.use(express.static('./public'));

// server start-up
const port = 4000;
console.log(
  "Open a browser to http://localhost:" + port + " to view the application");
  logger.info("DB successfully started")
app.listen(port);
