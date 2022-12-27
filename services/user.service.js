const faker = require('faker');
const pool = require('./../libs/postgres.pool');

class UserService{

    constructor() {
        this.users = [];
        this.generate();
        this.pool = pool;
        this.pool.on('error', (err) => (console.log(err)));
    }

    generate() {
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.users.push({
                id: faker.datatype.uuid(),
                name: faker.internet.userName(),
                password: faker.internet.password(),
                image: faker.image.imageUrl(),
            });
        }
    }

    async find() {
      const query = 'SELECT * FROM tasks';
      const rta = await this.pool.query(query);

      return rta.rows;
    }

    findOne(id) {
        return this.users.find(item => item.id === id);
    }

}

module.exports = UserService;
