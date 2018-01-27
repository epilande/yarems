/* eslint-disable global-require, function-paren-newline, no-console */
import { app, ipcMain } from 'electron';
import menubar from 'menubar';

require('fix-path')(); // resolve user $PATH env variable

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')({ showDevTools: true });
}

const installExtensions = async () => {
  if (process.env.NODE_ENV === 'development') {
    const installer = require('electron-devtools-installer');

    const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;

    return Promise.all(
      extensions.map(name => installer.default(installer[name], forceDownload)),
    ).catch(console.log);
  }
};

// menubar
const mb = menubar({
  alwaysOnTop: process.env.NODE_ENV === 'development',
  minWidth: 500,
  maxWidth: 500,
  minHeight: 500,
  preloadWindow: true,
  resizable: true,
  transparent: true,
});

mb.on('ready', async () => {
  await installExtensions();

  console.log('app is ready');
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// ipc communication
ipcMain.on('quit', () => {
  app.quit();
});
