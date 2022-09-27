const express = require('express')
const app = express()

const routerProduct = require('./src/routes/products') // --> 3° importo router

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/api/products', routerProduct)
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send(`Root`)
}) 


// Running server
const PORT = process.env.port || 8080

const server = app.listen(PORT, () => {
    console.log(`HTTP Server running on port ${server.address().port}`)
})

server.on("error", error => console.log(`Error on server ${error}`))