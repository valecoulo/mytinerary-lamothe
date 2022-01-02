require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const Router = require('./routes/routes')
require('./config/database');
const passport = require('passport')



app.use(cors());
app.use(express.json());
app.use(passport.initialize())

app.use('/api', Router)

app.listen(process.env.PORT || "4000", () => 
{console.log(`El server esta en el puerto ${process.env.PORT || "4000"}`);});
