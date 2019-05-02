/* const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const resolvers = require('./src/resolvers') */

const express = require('express')
const os = require('os')
const path = require('path')
const app = express()

app.use('/', express.static(path.join(__dirname, '../../', 'dist')))

app.get('/api/getUsername', (req, res) =>
  res.send({ username: os.userInfo().username }),
)

app.listen(process.env.PORT || 5000, () =>
  console.log(`Listening on port ${process.env.PORT || 5000}!`),
)
