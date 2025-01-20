const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  performAction: async (args) => ipcRenderer.invoke('perform-action', args),
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
  // Expose any necessary functions or objects
});
