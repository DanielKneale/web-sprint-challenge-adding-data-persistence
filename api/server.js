// build your server here and require it from index.js
const express = require("express")

const projectRoute = require("./project/router")
const resourceRoute = require("./resource/router")
const taskRoute = require("./task/router")

const server = express()

server.use(express.json())

server.use("/api/project", projectRoute)
server.use("/api/resource", resourceRoute)
server.use("/api/task", taskRoute)


module.exports = server