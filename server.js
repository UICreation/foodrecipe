const express = require('express')
const app = express()
const port = 8002
const path = require('path')
const bodyParser = require('body-parser')
const json = require('./src/recipes.json')

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'dist')))

app.listen(port, () => {
  console.log('server is ready!')
  console.log('The value of PORT is:', process.env.PORT);
})

app.get('/recipes', (req, res) => {
  console.log('trigger__')
  res.setHeader("Access-Control-Allow-Origin","*")
  res.send(json)
  res.end('ok')
 })

 app.get('/recipe/:id', (req, res) => {
    let id = req.params.id
    let data = json.recipe.filter(item => item.id !== id)
    let item = json.recipe.filter(item => item.id === id)
    data.unshift(...item)
    json.recipe = data
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Expose-Headers","Content-Length")
    res.send(json)
    res.end('ok')
 })