const db = require('../data/dbConfig.js');

module.exports = {
    find,
    insert,
    remove
}

function find() {
    return db('users')
}

function insert(userData) {
    return db('users').insert(userData);
}

function remove(id) {
    return db('users').where({id}).del()
}