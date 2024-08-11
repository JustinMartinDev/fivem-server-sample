import { spawn } from "./spawn";

on("onResourceStart", (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    console.log("TypeScript/Vanilla client-side boilerplate started!")
  }
});

on('onClientGameTypeStart', () => {
  spawn()
})