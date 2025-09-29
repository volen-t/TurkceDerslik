import { app, BrowserWindow } from "electron";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const resolvePreloadPath = () => {
  const candidates = ["preload.mjs", "preload.js"];
  for (const candidate of candidates) {
    const fullPath = path.join(__dirname, candidate);
    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
  }
  return path.join(__dirname, "preload.js");
};
const createWindow = async () => {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 1024,
    minHeight: 640,
    backgroundColor: "#0f172a",
    title: "T�rk�e Derslik",
    webPreferences: {
      preload: resolvePreloadPath(),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  });
  const devServerUrl = process.env.VITE_DEV_SERVER_URL;
  if (devServerUrl) {
    await mainWindow.loadURL(devServerUrl);
    if (!process.env.VITE_DISABLE_DEVTOOLS) {
      mainWindow.webContents.openDevTools({ mode: "detach" });
    }
  } else {
    mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));
  }
};
app.whenReady().then(() => {
  createWindow().catch((error) => {
    console.error("Failed to create window:", error);
  });
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow().catch((error) => {
        console.error("Failed to recreate window:", error);
      });
    }
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
