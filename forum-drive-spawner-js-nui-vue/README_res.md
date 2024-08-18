<h1 align="center">
    <res>
</h1>

<div align="center">
    <description>
</div>

## Requirements

- Node > v18
- Pnpm > v9.5

## Development

### Hot Building

While developing your resource, this boilerplate offers
a `watch` script that will automatically hot rebuild on any
change within the `client`, `server` or `web` directories.

```sh
pnpm watch
```

_This script still requires you restart the resource for the
changes to be reflected in-game_

### Entry Points

**Client** - `./client/src/client.js`

**Server** - `./server/src/server.js`

**Web** - `./web/src/main.js`

### Nui

Nui is available through a react application you can find in `web` folder.
The file `client/src/nui.js` contain `RegisterNUICallback` method, which work like the lua implementation to avoid complexity.

## Production Build

Once you have completed the development phase of your resource,
you must create an optimized & minimized production build, using
the `build` script.

```sh
pnpm build
```

## Client commands

| cmd      | args | description                           | usage      |
| -------- | ---- | ------------------------------------- | ---------- |
| show-nui | N/A  | display the Nui window in client game | `show-nui` |

## Server commands

| cmd | args | description | usage |
| --- | ---- | ----------- | ----- |
|     |      |             |       |
