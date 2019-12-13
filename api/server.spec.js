const request = require('supertest');

const server = require('./server.js');

describe('server', () => {
    describe('GET /', () => {
        it('should return 200 OK', () => {
            return request(server)
            .get('/api/users')
            .then(res => {
                expect(res.status).toBe(200);
            })
        })
    })

    describe('POST /', () => {
        it('should return 200 ok', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
            })
        })
    })

    describe('DELETE /', () => {
        it('should return 200 ok', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
            })
        })
    })
    
})