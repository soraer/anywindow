
const path = require("path")
const config = require("../config")
const helper = require("./helper/route")

module.exports = function (req, res) {
    const filePath = path.join(config.root, req.url)
    helper(req, res, filePath)
}