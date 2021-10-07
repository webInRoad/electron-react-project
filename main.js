const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
let mainWindow = null
app.on('ready', () => {
	mainWindow = new BrowserWindow({
		width: 1024,
		height: 650,
		minWidth: 500,
		webPreferences: {
			nodeIntegration: true, // 配合 contextIsolation 才会起作用
			contextIsolation: false
		}
	})
	const url = isDev ? 'http://localhost:3000/' : '生产地址'
	mainWindow.loadURL(url)
})
