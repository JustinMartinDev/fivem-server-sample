on("onResourceStart", (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    console.log("TypeScript/Vanilla server-side boilerplate started!");
  }
});

