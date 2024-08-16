import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import {
  mockTriggerNuiEvent,
  mockTriggerNuiEvents,
} from "./utils/mockTriggerNuiEvent";
import { isEnvBrowser } from "./utils/misc";

declare global {
  interface Window {
    invokeNative?: unknown;
    GetParentResourceName: () => string;
    citFrames: Record<string, HTMLIFrameElement>;
    mockTriggerNuiEvents: typeof mockTriggerNuiEvents;
    mockTriggerNuiEvent: typeof mockTriggerNuiEvent;
  }
}

parent["GetParentResourceName"] = () => "forum-drive-spawner-ts-nui-vue"

if (import.meta.env.MODE === "development" && isEnvBrowser()) {
  window.mockTriggerNuiEvent = mockTriggerNuiEvent;
  window.mockTriggerNuiEvents = mockTriggerNuiEvents;
}

if(window.mockTriggerNuiEvent) {
  window.mockTriggerNuiEvent({ action: "setVisible", data: false });
}

createApp(App).mount("#app");
