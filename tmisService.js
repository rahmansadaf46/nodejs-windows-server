const Service = require('node-windows').Service;

const svc = new Service({
    name: "TMIS",
    description: "Training Management Information System",
    script:"F:\\tmis run windows\\index.js"
})


svc.on('install', function(){
    svc.start()
})

svc.install()