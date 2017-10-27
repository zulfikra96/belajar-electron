const { app, BrowserWindow } =  require('electron')


app.on('ready', function(){

    let desktop = new BrowserWindow({
        width:400,
        height:400
    })

    desktop.loadURL(`file://${__dirname}/index.html`)
})
