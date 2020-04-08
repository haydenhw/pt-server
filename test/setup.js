process.env.TZ = 'UTC'
process.env.NODE_ENV = 'test'
const path = require('path')
const envPath = path.resolve(__dirname) + '/.env.test';
require('dotenv').config({path: envPath})
const { expect } = require('chai')
const supertest = require('supertest')

global.expect = expect
global.supertest = supertest
