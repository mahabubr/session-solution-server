const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const category = require('./data/category.json')
const courseItem = require('./data/course.json')

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/category', (req, res) => {
    res.send(category)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id
    const selectedItem = courseItem.find(item => item.category_id === id)
    res.send(selectedItem)
})


app.listen(port, () => {
    console.log(`port running on ${port}`);
})