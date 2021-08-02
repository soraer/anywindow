const yargs = require('yargs');
const Server = require('./app');

const argv = yargs
            .usage('anywindow [options]')
            .option('p', {
                alias: 'port',
                describe: '端口号',
                default: 3000
            })
            .option('h', {
                alias: 'hostname',
                describe: 'host',
                default: '127.0.0.1'
            })
            .option('d', {
                alias: 'root',
                describe: 'root path',
                default: process.cwd()
            })
            .version()
            .alias('v', 'version')
            .help()
            .argv;


const server = new Server(argv)
server.start()

// 如何把项目弄成npm包？
// packaeg.json 中配置bin字段属性，配置对应的执行路径
// 对应的在项目目录里添加bin文件夹和anywindow文件
// 注意：anywindow中有这么一句，#! /usr/bin/env node，指的是用/usr/bin/env动态的去查找到你的脚本路径，并用node来执行
// linux里需要给文件添加执行权限
// 执行 chmod +x bin/anywindow 添加执行权限
// 此时就可以用 bin/anywindow -p 9999 来启动

// 发布到npm
// npm login 登陆npm
// npm publish 发布到npm