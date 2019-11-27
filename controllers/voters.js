const express = require('express');
const router = express.Router();
const Voter = require('../models/voters.js');

// index route
router.get('/canvasing', (req, res) => {
    Voter.find({}, (error, foundVoters) => {
        res.render('Index', {
            voters:foundVoters
        })
    })
    // res.send('this index is working');
});

// new route
router.get('/canvasing/new', (req, res) => {
    res.render('New');
});

// create route 
router.post('/canvasing/voter', (req, res) => {
    if(req.body.commitToDonate === 'on') {
        req.body.commitToDonate = true;
    } else {
        req.body.commitToDonate = false;
    }
    Voter.create(req.body, (error, createdVoters) => {
        res.redirect('/canvasing');
    })
});

// show route 
router.get('/canvasing/:id', (req, res) => {
    Voter.findById(req.params.id, (error, foundVoter) => {
        res.render('Show', {
            voter:foundVoter
        });
    });
});

// delete route 
router.delete('/canvasing/:id', (req, res)=>{
    Voter.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/canvasing');
    });
});

// edit route 
router.get('/canvasing/:id/edit', (req, res)=>{
    Voter.findById(req.params.id, (err, foundVoter)=>{
        res.render('Edit.jsx', {
    			voter: foundVoter
    		});
    });
});

// put route 
router.put('/canvasing/:id', (req, res)=>{
    if(req.body.commitToDonate === 'on'){
        req.body.commitToDonate = true;
    } else {
        req.body.commitToDonate = false;
    }
    Log.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel)=>{
        res.redirect('/canvasing');
    });
});

module.exports = router;