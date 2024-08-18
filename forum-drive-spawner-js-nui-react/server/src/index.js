import { init } from "./init";

on("onResourceStart", (resName) => {
  if (resName === GetCurrentResourceName()) {
    init();
  }
});
