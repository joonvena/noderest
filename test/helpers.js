var supertest = require('supertest');
var chai = require('chai');
var app = require('../app.js');
var usercontroller = require('../controller/usercontroller');
var pool = require('../database');

global.app = app;
global.expect = chai.expect;
global.request = supertest(app);
global.pool = pool;
global.usercontroller = usercontroller;