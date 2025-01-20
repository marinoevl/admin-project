const { app, BrowserWindow } = require('electron');
const path = require('node:path');
const { ipcMain } = require('electron');
require('dotenv').config()
const log = require('electron-log');

let mainWindow;

ipcMain.handle('perform-action', async (event, args) => {
  return `Action performed with args: ${args}`;
});

// Enable hor reload in development
if (process.env.NODE_ENV === 'development') {
  require('electron-reload')(path.join(__dirname, '..dist'), {
    electron: path.join(__dirname, '../node_modules/.bin/electron'),
    awaitWriteFinish: true,
  });
}

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true, // Enable context isolation
      nodeIntegration: false, // Disable node integration
    },
  });

  log.info('App is starting...');
  log.info('App is starting...', process.env);

  if (process.env.NODE_ENV === 'development') {
    console.log('Development')
    mainWindow.loadURL('http://localhost:5173');
  } else {
    log.info('Dirname', __dirname);
    log.info('entry point: ', path.join(__dirname, '../dist/index.html'))
    mainWindow.loadURL(path.join(__dirname, '../dist/index.html'));
  }
};

app.whenReady().then(() => {
  // installExtension('ljjemllljcmogpfapbkkighbhhppjdbg') // Vue DevTools
  //   .then((name) => console.log(`Added Extension: ${name}`))
  //   .catch((err) => console.log('An error occurred:', err));

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
