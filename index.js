//1- require express
const express = require('express') 

//2-init app
const app = express();

//4-routing: app.METHOD(path, handler)
// app.use((req, res) => {
//     res.send('We are starting our express application')
// })

// app.get('/', (req, res) => {
//     res.send('This is the home page')
//     // console.log(req)
//     console.log(req.method)
//     console.log(req.url)
// } )

// app.get('/about', (req, res) => {
//     res.send('This is the about page')
//     // console.log(req)
//     console.log(req.method)
//     console.log(req.url)
// } )
// app.get('/services/:subservices/:subserviceId', (req, res) => {
//     const {subservices, subserviceId} = req.params
//     res.send(`this is the page of ${subservices} with the id: ${subserviceId}`)
//     // console.log(req)
//     console.log(req.method)
//     console.log(req.url)
//     console.log(req.params)
// } )

// app.get('*', (req, res) => {
//     res.send('3ammar 404')
// })


//5-creating middlewares

app.get('/', thirdMid) //route-level middleware

function firstMid(req, res, next) {
    const reqValue = 'a' 
    console.log(`I am the first middleware and I have the value: ${reqValue}`)
    next()
}

function secondMid(req, res, next) {
    const reqValue = "b"
    console.log(`I am the second middleware and now the value is ${reqValue}`)
    res.send('finishing the cycle')
}

function thirdMid(req, res, next) {
    console.log('I am the third mid')
    next()
}
app.use(firstMid, secondMid) //app-level middlewares


//3-create server and run it
const PORT = 5432;
app.listen(PORT, err => {
    err ? console.log(err) : console.log(`Server is running on port ${PORT} 🔥`)
})