import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import glob from "fast-glob";

//find all file matching the pattern *.entry.tsc
const entryFiles = glob.sync("src/*.entry.ts");

if (entryFiles.length === 0) {
  throw new Error("No entry files found");
}

export default entryFiles.map((entryFile) => ({
  input: entryFile,
  output: {
    dir: "dist",
    format: "cjs",
    sourcemap: false,
  },
  plugins: [resolve(), typescript(), commonjs()],
}));
