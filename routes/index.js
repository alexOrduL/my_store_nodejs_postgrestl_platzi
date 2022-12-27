const router = require('express').Router();

const productsRouter = require('./products.router')
const usersRouter = require('./users.router')
const companiesRouter = require('./companies.router')

function routerApi(app) {
    app.use('/api/v1', router);
    router.use('/products', productsRouter);
    router.use('/categories', companiesRouter);
    router.use('/users', usersRouter);
}

module.exports = routerApi;
