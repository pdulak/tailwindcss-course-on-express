import express from "express";

const app = express();
const port = 8080;

app.set('view engine', 'pug') 
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
