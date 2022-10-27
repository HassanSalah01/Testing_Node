const os = require('os');
class OsInfo{
    constructor(){
        this.cpuArch = os.arch()
        this.cpu = os.cpus();
        this.endiannes = os.endianness();
        this.hostname= os.hostname();
        this.osType = os.type()
    }
    osInfo(){
        console.log(`HOSTNAME : ${this.hostname}`);
        console.log(`Endiannes : ${this.endiannes}`);
        console.log(`CPU Architecture : ${this.cpuArch}`);
        console.log(`Cpu : ${this.cpu}`);
        console.log(`OS Type : ${this.osType}`);
    }
}

const oss=new OsInfo();
console.log(oss.osInfo());