const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  performAction: async (args) => ipcRenderer.invoke('perform-action', args),
  // Expose any necessary functions or objects
});
