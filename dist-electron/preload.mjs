"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electronAPI", {
  invoke: (channel, data) => electron.ipcRenderer.invoke(channel, data),
  on: (channel, callback) => {
    electron.ipcRenderer.on(channel, callback);
    return () => electron.ipcRenderer.removeListener(channel, callback);
  }
});
