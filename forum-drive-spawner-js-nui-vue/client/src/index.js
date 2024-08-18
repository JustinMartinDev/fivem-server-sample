import { initNui, toggleNuiFrame } from "./nui";
import { spawn } from "./spawn";

initNui();

on("onResourceStart", (resName) => {
  if (resName === GetCurrentResourceName()) {
    console.log("Javascript/Nui/Vue client-side boilerplate started!");
  }
  toggleNuiFrame(false);
});

on("onClientGameTypeStart", () => {
  toggleNuiFrame(false);
  spawn();
});
