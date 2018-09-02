const functions = require('firebase-functions')
const express = require('express')
const engines = require('consolidate')

const app = express()

app.engine('hbs', engines.handlebars)
app.set("views", "./views")
app.set("view engine", 'hbs')

app.get("/", (req, res) => {
    res.render('index.hbs', {title: 'TEST'})
});

exports.app = functions.https.onRequest(app);