var monitor = require('./monitor/index.js');

var param = {
    pid: process.pid,
    serverId: 'node-1'
};

monitor.psmonitor.getPsInfo(param, function(data) {
    console.log('process information is :', JSON.stringify(data));
});

monitor.sysmonitor.getSysInfo(function(data) {
    console.log('operating-system information is :', JSON.stringify(data));
});
