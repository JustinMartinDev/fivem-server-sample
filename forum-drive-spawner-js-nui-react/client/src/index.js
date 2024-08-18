import { initNui } from "./nui";

initNui();

on("onResourceStart", (resName) => {
  if (resName === GetCurrentResourceName()) {
    console.log("Javascript/Nui/React client-side boilerplate started!");
  }
});
