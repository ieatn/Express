const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views')
app.listen(3000)

// middleware, look for files in public folder, use default /style.css not /public/style.css 
app.use(express.static('public'))







app.get('/', (req, res) => {

    const blogs = [
        {title: 'yoshi finds eggs', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, unde.'},
        {title: 'yoshi finds eggs', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, unde.'},
        {title: 'yoshi finds eggs', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, unde.'},
    ]

    res.render('index', { name: 'Dennis', blogs })
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/create', (req, res) => {
    res.render('create')
})
app.post('/result', (req, res) => {
    res.send('thanks for posting your blog!')
})
app.get('/about-us', (req, res) => {
    res.redirect('./about')
})
app.use((req, res) => {
    res.status(404).render('404')
})