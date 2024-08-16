import { initNui, toggleNuiFrame } from "./nui";
import { spawn } from "./spawn";

initNui();

on("onResourceStart", (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    console.log("TypeScript/Nui/Vue client-side boilerplate started!");
    toggleNuiFrame(false);
    SetNuiFocus(false, false)
  }
});

on("onClientGameTypeStart", () => {
  toggleNuiFrame(false);
  spawn();
});