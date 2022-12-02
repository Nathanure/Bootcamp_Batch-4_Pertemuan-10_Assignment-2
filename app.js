// Import third-party module
const express = require('express')
const app = express()
// Variable for port
const port = 3000

// Functions to switch directory in URL
app.get('/', (req, res) => {
    // sendFile to send 'static files', such as html, picture, and css to the browsers
    // For {root: __dirname} is to determine the location of it
    res.sendFile('./page/index.html', {root: __dirname});
})
app.get('/about', (req, res) => {
    res.sendFile('./page/about.html', {root: __dirname});
})
app.get('/contact', (req, res) => {
    res.sendFile('./page/contact.html', {root: __dirname});
})
// :id is to give url a parameter
app.get('/product', (req, res) => {
    // To callback the parameters that are in the URL, use req.params.id
    // To callback the query from URL, use ?<queryName>=<input>
    // before ? sign you can put an :id, make sure to define it first
    // And make sure the query in URL is the same as <queryName> in the code 
    res.send(`Product ID: ${(req.params.id)}<br>Category: ${(req.query.idCat)}`);
})
app.use('/', (req, res) => {
    res.status(404)
    res.send('Page Not Found 404')
})

app.listen(port, () => {
    console.log(`Example app on port ${(port)}`)
})