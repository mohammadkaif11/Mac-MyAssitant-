const io = require('socket.io-client')
var osu = require('node-os-utils');
const si = require('systeminformation');
const { exec } = require('child_process');
var spawn = require("child_process").spawn;

let socket = io.connect('http://localhost:5000')

socket.on('SendData', data => {
    //RamUsagePrectage
    if (data == 4) {
        var mem = osu.mem
         mem.info()
            .then(info => {
                console.log(info)
                socket.emit("GetResponse",`Ram Used${info.usedMemPercentage}`)
            })
    }
    //Tempraature of laptop
    else if (data == 3) {
        si.cpuTemperature().then(data=>{
            console.log(data)
            socket.emit("GetResponse", `Max Temprature ${data.max} main Temprature ${data.main}`)
        })
    }
    //Cpu usagePrecentage
    else if (data == 2) {
        exec('wmic cpu get LoadPercentage', (error, stdout, stderr) => {
            if (error) {
                console.log(error);
                return;
            }
            if (stdout) {
              var   value = stdout.split("\n")[1];
                console.log(data)
                socket.emit("GetResponse", `LoadPrecenatage CPU ${value}%`)
                return;
            }
            if (stderr) {
                console.log(stderr)
                return;
            }
        })
    }

    //ALL INFORMATION
    else if (data == 1) {
     socket.emit("GetResponse",`Service is on Development`)
    }

    //StartFilecommand
    else if(data.includes('start')){
        exec(data, (error, stdout, stderr) => {
            if (error) {
                console.log(error);
                return;
            }
            if (stdout) {
                console.log(stdout)
                return;
            }
            if (stderr) {
                console.log(stderr)
                return;
            }
            socket.emit("GetResponse", "Ok User I am Working on that")
        })
    } 
    else if(data.includes('system')){
      if(data.includes('shutdown')){
        exec('shutdown /s', (error, stdout, stderr) => {
            if (error) {
                console.log(error);
                return;
            }
            if (stdout) {
                socket.emit("GetResponse", `I have done My Job`)
                return;
            }
            if (stderr) {
                console.log(stderr)
                return;
            }
        })
      }
      else if(data.includes('restart')){
        exec('shutdown /r', (error, stdout, stderr) => {
            if (error) {
                console.log(error);
                return;
            }
            if (stdout) {
                socket.emit("GetResponse", `I have done My Job`)
                return;
            }
            if (stderr) {
                console.log(stderr)
                return;
            }
        })
      }
      else{
        socket.emit("GetResponse", `I did Not Understand`)

      }

    }
    else if(data.includes('volume')){
        var process = spawn('python',["volume.py",data] );
        process.stdout.on('data', function(data) {
            console.log(data.toString())
            var Msg=data.toString();
            socket.emit("GetResponse", Msg)
        } )
    }

})

