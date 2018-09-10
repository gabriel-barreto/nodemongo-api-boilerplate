#!/usr/bin/env node

// ==> Dependencies
const faker = require("faker/locale/pt_BR");

// ==> Number of seeds
const MAX = 100;

// ==> Your results container
const seeds = [];


// ==> Setting times of seed
for (let i = 0; i < MAX; i += 1) {
    // To Define your model consulting other methods:
    // https://github.com/marak/Faker.js/#api-methods
    seeds.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        username: faker.internet.userName().toLowerCase(),
    });
}

// ==> Do something with your seeds
//
// --> Write in mongo
// require("../Models/example.model").insertMany(seeds, (err) => {
//     if (err) throw err;
//     console.log("Seeds... DONE!");
// });
//
// --> Store in a JSON file
// const fs = require("fs");
// const path = require("path");
// const fileName = "seeds_example.json";
// const filePath = path.resolve(__dirname, "..", fileName);
// fs.writeFile(filePath, JSON.stringify(seeds), (err) => {
//     if (err) throw err;
//     console.log("Seeds... DONE!");
// });
// Obs.: Your seed will be overwrited every time this run