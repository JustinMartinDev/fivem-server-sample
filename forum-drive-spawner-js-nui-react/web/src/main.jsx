import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { VisibilityProvider } from "./providers/VisibilityProvider";
import { isEnvBrowser } from "./utils/misc";
import {
  mockTriggerNuiEvent,
  mockTriggerNuiEvents,
} from "./utils/mockTriggerNuiEvent";

parent["GetParentResourceName"] = () => "forum-drive-spawner-js-nui-react";

if (import.meta.env.MODE === "development" && isEnvBrowser()) {
  window.mockTriggerNuiEvent = mockTriggerNuiEvent;
  window.mockTriggerNuiEvents = mockTriggerNuiEvents;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VisibilityProvider>
      <App />
    </VisibilityProvider>
  </React.StrictMode>
)
