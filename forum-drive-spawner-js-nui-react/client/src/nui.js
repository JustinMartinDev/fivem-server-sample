export const registerNUICallback = (name, cb) => {
  RegisterNuiCallbackType(name);
  on(`__cfx_nui:${name}`, cb);
};

const sendReactMessage = (action, data) =>
  SendNUIMessage({
    action,
    data,
  });

export const toggleNuiFrame = (shouldShow) => {
  SetNuiFocus(shouldShow, shouldShow);
  sendReactMessage("setVisible", shouldShow);
};

export const initNui = () => {
  RegisterCommand(
    "show-nui",
    () => {
      toggleNuiFrame(true);
      console.log("Show NUI frame");
    },
    false
  );

  RegisterCommand(
    "hide-nui",
    () => {
      toggleNuiFrame(false);
      console.log("Hide NUI frame");
    },
    false
  );

  // Exemple of sending data to React

  registerNUICallback("getClientData", (data, cb) => {
    console.log("Data sent by React", JSON.parse(data));

    const curCoords = GetEntityCoords(PlayerPedId(), true);

    const retData = { x: curCoords[0], y: curCoords[1], z: curCoords[2] };
    cb(retData);
  });
};
