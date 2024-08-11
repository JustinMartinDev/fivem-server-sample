"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spawn_1 = require("./spawn");
on("onResourceStart", (resName) => {
    if (resName === GetCurrentResourceName()) {
        console.log("TypeScript/Vanilla client-side boilerplate started!");
    }
});
on('onClientGameTypeStart', () => {
    (0, spawn_1.spawn)();
});
