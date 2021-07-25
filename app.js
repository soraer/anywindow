const http = require("http")
const chalk = require("chalk")
const config = require("./config")
const handleFn = require("./src/index")

const server = http.createServer(handleFn)

server.listen(config.port, config.hostname, () => {
    const add = `http://${config.hostname}:${config.port}`
    console.log(`Server is running at ${chalk.green(add)}`)
})