const express = require('express');

const Users = require('./users-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json({message: 'Failed ot get users'});
    });
});

router.post('/', (req, res) => {
    const userData = req.body;

    Users.insert(userData)
    .then(ids => {
        res.status(201).json({ created: ids[0]})
    })
    .catch(err => {
        res.status(500).json({message: "Failed to create new user."});
    });
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Users.remove(id)
    .then(count => {
        if(count) {
            res.json({removed: count});
        } else {
            res.status(404).json({message: 'Could not find user with given id.'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to delete user'})
    });
});

module.exports = router;