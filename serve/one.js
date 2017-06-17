var express = require('express')
var ip = require('ip')
let path = require('path')

class ServerOne {
    constructor () {
        this.app = express()
        this.server = {}
        this.port = 5000
        this.ipAdrress = ip.address()
        this.distFolderPath = path.resolve(__dirname, '../dist/')
        this.app.use(express.static(this.distFolderPath))
        this.app.get('/', function (req, res) {
            res.sendFile(path.resolve(this.distFolderPath, 'index.html') )
        })
    }
    start () {
        this.server = this.app.listen(this.port, this.ipAdrress, () => {
            var host = this.server.address().address
            var port = this.server.address().port
            console.log('goatstone server listening at http://%s:%s', host, port)
        })
    }
    stop () {
        this.server.close()
    }
}
// start the server
new ServerOne().start()
