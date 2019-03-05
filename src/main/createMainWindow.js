import { BrowserWindow } from "electron";

class MainWindow{
    constructor(){
        this.windows = new BrowserWindow({ width: 800, height: 600 });
        this.windows.loadURL(`file://${__dirname}/../../index.html`);
        this.windows.on("closed", ()=>{
            this.windows = null;
        });
    }
}

function createMainWindow(){
    return new MainWindow();
}

export default createMainWindow;
