const express = require('express')
const app = express()
const port = process.env.PORT||5000
const path = require('path')
// const CronJob = require('cron').CronJob;
const seeder = require('./seeder.js')


//require middleware
const morgan = require("morgan")

//use middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))


app.get('/', function (req, res) {
    res.send('This is just a worker to run the seeder for my menu item project!')
  })

// cron task (this runs the seeder every midnight at 1am)
// new CronJob('0 1 * * *', ()=>{seeder(); console.log('seeder is run!!!')}, null, true, 'America/Los_Angeles');


app.listen(port, () => console.log(`Example app listening on port ${port}!`))