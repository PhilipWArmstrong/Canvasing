const express = require('express');
const router = express.Router();
const Voter = require('../models/voters.js');

// index route
router.get('/', (req, res) => {
    Voter.find({}, (error, foundVoters) => {
        res.render('Index', {
            voters:foundVoters
        })
    })
    // res.send('this index is working');
});

// new route
router.get('/new', (req, res) => {
    res.render('New');
    res.redirect('/canvasing');
});

// create route 
router.post('/voter', (req, res) => {
    if(req.body.commitToDonate === 'on') {
        req.body.commitToDonate = true;
    } else {
        req.body.commitToDonate = false;
    }
    req.body.registered = true;
    Voter.create(req.body, (error, createdVoters) => {
        res.redirect('/');
        // console.log(createdVoters)
        // console.log(error)
    })
});

// show route 
router.get('/:id', (req, res) => {
    Voter.findById(req.params.id, (error, foundVoter) => {
        res.render('Show', {
            voter:foundVoter
        });
    });
});

// delete route 
router.delete('/:id', (req, res)=>{
    Voter.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/canvasing');
    });
});

// edit route 
router.get('/:id/edit', (req, res)=>{
    Voter.findById(req.params.id, (err, foundVoter)=>{
        res.render('Edit.jsx', {
    			voter: foundVoter
    		});
    });
});

// put route 
router.put('/:id', (req, res)=>{
    if(req.body.commitToDonate === 'on'){
        req.body.commitToDonate = true;
    } else {
        req.body.commitToDonate = false;
    }
    req.body.registered = true;
    Voter.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel)=>{
        res.redirect('/canvasing');
    });
});

module.exports = router;