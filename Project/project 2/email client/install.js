var Service = require('node-windows').Service;
var path = require('path');

var svc = new Service({
  name:'Email client',
  description: 'Node as windows service',
  script: require('path').join(__dirname,'server.js'),
  env: {
    name: "HOME",
    value: process.env["USERPROFILE"]
  }
});

svc.on('install',function(){
  svc.start();
  console.log('Install complete.');
  console.log('The service exists: ', svc.exists);
});

svc.install();
