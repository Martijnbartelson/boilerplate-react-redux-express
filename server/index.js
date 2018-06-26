const express = require('express')
const body = require('body-parser')
const cors = require('cors')
const { Games } = require("./db")

const app = express()

app.use(cors())
app.use(body())


app.get("/games", (req, res) => {
    sendResponse(Games.findAll(),res)
  })

app.post("/games", (req, res) => {
    sendResponse(Game.create(req.body), res)
})

app.get("/games/:id", (req, res) => {
    sendResponse(Games.findById(+req.params.id), res)
})

app.put('/games/:id', (req, res) => {
    const updates = req.body
    // +req.params.id transforms string into a number
    Games.findById(+req.params.id)
          .then(game => game.update(updates).then(res.send(game)))
          .catch(fail(res))
})

app.delete("/games/:id", (req, res) => {
  Games.findById(+req.params.id)
    .then(game => {
      if (game) {
        return game.destroy().then(() => res.end())
      }
      res.status(404).end()
    })
    .catch(fail(res))
})


const sendResponse = (promise, res) => {
  promise
    .then(result => {
      if (result) {
        res.send(result)
      } else {
        res.status(404).end()
      }
    })
    .catch(fail(res))
}

const fail = res => err => {
  console.error(err)
  res.status(500).send(JSON.stringify(err))
}


app.listen(4001, () => console.log('Express API listening on port 4001'))
