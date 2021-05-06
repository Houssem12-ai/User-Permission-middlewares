const express = require('express')
const app = express()
const { users,ROLE } = require('./data')
const projectRouter = require('./routes/projects')
const { authUser, authRole } = require('./MidldleAuth');

// create application/json parser
// create application/x-www-form-urlencoded parser


// /* WHY I CANT USE  app.use(setUser) HERE ABOVE app.use(express.json())*/

app.use(express.json())
app.use(setUser) // guess this set the middleware in all of the routes
app.use('/projects', projectRouter)

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/dashboard',authUser,authRole(ROLE.BASIC),(req, res) => {
  res.send('Dashboard Page')
})

app.get('/admin',authUser,authRole(ROLE.ADMIN), (req, res) => {
  res.send('Admin Page')
})

function setUser(req, res, next) {
  const userId = req.body.userId
  //console.log(userId)
   if (userId) {
    req.user = users.find(user => user.id === userId)
  }
  next()
}


app.listen(3010)

