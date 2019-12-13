const db = require('../data/dbConfig.js');

const {insert} = require('./users-model.js');

describe('users model', () => {
    describe('insert()', () => {
        beforeEach(async () => {
            await db('users').truncate();
        });

        it('should insert a user', async () => {
           await insert({name: 'john'});
           
           const users = await db('users');
           expect(users).toHaveLength(1);
        })
   

        it('should delete a user', async () => {
           await delete({name: 'jane'});
           
           const users = await db('users');
           expect(users).toHaveLength(0);
        })
    })
})