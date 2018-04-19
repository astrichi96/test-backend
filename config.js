/*
    In this file the configurations are made for the database and the URL address on which it will be running
*/
module.exports = {
    port: process.env.PORT || 3000,
    db: 'mongodb://foundation123:foundation123@ds125146.mlab.com:25146/foundation-test1'
}