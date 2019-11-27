const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const voterController = require('./controllers/voters.js');



app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//////////////////////////////////////////////////
mongoose.connect('mongodb://localhost:27017/canvasing', { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// where routes would have been
app.use('/canvasing', voterController); 

app.listen(3002, () => {
    console.log('this is working');
});