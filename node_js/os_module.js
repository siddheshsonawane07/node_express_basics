const os = require('os');

const user = os.userInfo();
console.log(user);

console.log('the system uptime is ' + os.uptime() + ' seconds');


const currentOS = {
    platform: os.platform(),
    name : os.type(),
    version : os.release(),
    uptime : os.uptime(),
    freemem : os.freemem(),
    totalmem : os.totalmem(),
}

console.log(currentOS);