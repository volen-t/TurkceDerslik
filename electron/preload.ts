import { contextBridge, ipcRenderer } from 'electron';

type Channels = 'progress:get' | 'progress:update';

contextBridge.exposeInMainWorld('electronAPI', {
  invoke: (channel: Channels, data?: unknown) => ipcRenderer.invoke(channel, data),
  on: (channel: Channels, callback: (event: Electron.IpcRendererEvent, ...args: unknown[]) => void) => {
    ipcRenderer.on(channel, callback);
    return () => ipcRenderer.removeListener(channel, callback);
  },
});
