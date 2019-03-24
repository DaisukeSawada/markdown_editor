import { BrowserWindow, ipcMain } from "electron";

class MainWindow{
    constructor(){
        this.windows = new BrowserWindow({ width: 800, height: 600 });
        this.windows.loadURL(`file://${__dirname}/../../index.html`);
        this.windows.on("closed", ()=>{
            this.windows = null;
        });
    }

    requestText() {
        return new Promise((resolve) => {
          this.window.webContents.send("REQUEST_TEXT");
          ipcMain.once("REPLY_TEXT", (_e, text) => resolve(text));
        });
    }

    sendText(text) {
        this.window.webContents.send("SEND_TEXT", text);
    }
}

function createMainWindow(){
    return new MainWindow();
}

export default createMainWindow;
