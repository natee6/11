'use strict';

require('dotenv').config();

const knex = require('knex');

const db = knex({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'bpes_db',
    charset: 'utf8mb4',
  },
  pool: {
    min: 0,
    max: 10,
  },
});

module.exports = db;