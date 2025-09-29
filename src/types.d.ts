export {};

declare global {
  interface Window {
    electronAPI: {
      invoke: (channel: "progress:get" | "progress:update", data?: unknown) => Promise<unknown>;
      on: (
        channel: "progress:get" | "progress:update",
        callback: (event: Electron.IpcRendererEvent, ...args: unknown[]) => void
      ) => () => void;
    };
  }
}
