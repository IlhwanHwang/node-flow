import * as net from "net"
const portOrig = parseInt(process.env.PORT!);
const port = process.env.PORT ? (portOrig - 100) : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () => client.connect({port: port}, () => {
    client.end()
    if (!startedElectron) {
        console.log("starting electron")
        startedElectron = true
        const exec = require("child_process").exec
        exec("yarn run electron")
    }
});

tryConnection();

client.on("error", (error) => {
    setTimeout(tryConnection, 1000)
});