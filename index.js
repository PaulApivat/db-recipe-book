const express = require('express');
const knex = require('knex');

const dbConfig = require('./knexfile');

const server = express();
const db = knex(dbConfig.development);
const PORT = 3000;

server.use(express.json());     //body parser middleware

// [GET] /cohorts This route will return an array of all dishes.
// SELECT * FROM dish;
// getDishes(): should return a list of all dishes in the database.
server.get('/dish', (req , res) => {
    db('dish')
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Failed to retrieve all dishes"})
    })
});

server.get('/recipe', (req, res) => {
    db('recipe')
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Failed to retrieve all recipe"})
    })
});

server.get('/ingredients', (req, res) => {
    db('ingredients')
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Failed to retrieve all ingredients"})
    })
});

server.get('/recipeingredients', (req, res) => {
    db('recipeingredients')
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Failed to retrieve join table"})
    })
})

// getDish(id): should return the dish with the provided id and 
// include a list of the related recipes.
server.get('/dish/:id/recipe', (req, res) => {
    const {id} = req.params;
    db('recipe').where('dish_id', id)
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        res.status(500).json({err: "Failed to find recipe for this particular dish"})
    })
})

// SHOPPING LIST: should return a list of all Recipe & Ingredients (+ quantity) for Dish with particular id
server.get('/recipeingredients/:id/dish', (req, res) => {
    const {id} = req.params;
    db('recipeingredients').where('dish_id', id)
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        res.status(500).json({err: "Failed to find DISHES for this particular id"})
    })
})

// (CORRECT) SHOPPING LIST: returns a lit of all ingredients for a particular Recipe
server.get('/recipeingredients/:id/recipe', (req, res) => {
    const {id} = req.params;
    db('recipeingredients').where('recipe_id', id)
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        res.status(500).json({err: "Failed to find Recipe with this id and all associated ingredients"})
    })
})

// [POST] /dish This route should save a new dish to the database.
server.post('/dish', (req, res) => {
    const dish = req.body;
    console.log('dish info', dish)
    db('dish').insert(dish)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Failed to insert dish"});
    })
})

// [POST] /recipe This route should save a new recipe to the database.
server.post('/recipe', (req, res) => {
    const recipe = req.body;
    console.log('recipe info', recipe)
    db('recipe').insert(recipe)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: "Failed to insert recipe"});
    })
})

//SERVER LISTEN
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})