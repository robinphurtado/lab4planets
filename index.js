const express = require('express');
const fetch = require("node-fetch");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

//routes
app.get('/', (req, res) => {
  res.render('index')
});

app.get('/mars', (req, res) => {
  res.render('mars')
});

app.get('/venus', (req, res) => {
  res.render('venus')
});

app.get('/jupiter', (req, res) => {
  res.render('jupiter')
});

app.get('/pluto', (req, res) => {
  res.render('pluto')
});

app.get('/earth', async (req, res) => {
  let url =
    "https://api.unsplash.com/photos/random/?client_id=7756a1e81f817c186cf57294e1c19b37b49c54b8f34e7c499ee0ce5cd86cd16e&featured=true&query=planet-earth";
  let response = await fetch(url);
  let data = await response.json();
  let image = data.urls.small;
  res.render('earth', { "earthUrl": image })
});

app.listen(3000, () => {
  console.log('server started');
});