const http = require("http")
const path = require('path')
const chalk = require("chalk")
const config = require("../config")
const helper = require("./helper/route")
const openUrl = require('../src/helper/openUrl')

class Server {
    constructor(conf) {
        this.config = Object.assign({}, config, conf)
    }

    start() {
        const server = http.createServer((req, res) => {
            const filePath = path.join(this.config.root, req.url)
            helper(req, res, filePath, this.config)
        })

        server.listen(this.config.port, this.config.hostname, () => {
            const add = `http://${this.config.hostname}:${this.config.port}`
            console.log(`Server is running at ${chalk.green(add)}`)
            openUrl(add)
        })
    }
}

module.exports = Server
