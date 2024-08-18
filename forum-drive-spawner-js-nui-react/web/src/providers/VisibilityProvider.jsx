import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNuiEvent } from "../hooks/useNuiEvent";
import { fetchNui } from "../utils/fetchNui";
import { isEnvBrowser } from "../utils/misc";

const VisibilityCtx = createContext(null);

// This should be mounted at the top level of your application, it is currently set to
// apply a CSS visibility value. If this is non-performant, this should be customized.
export const VisibilityProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useNuiEvent("setVisible", setVisible);

  // Handle pressing escape/backspace
  useEffect(() => {
    // Only attach listener when we are visible
    const resourceName = parent.GetParentResourceName();
    parent.citFrames[resourceName].style.setProperty(
      "visibility",
      visible ? "visible" : "hidden"
    );

    const keyHandler = (e) => {
      if (["Backspace", "Escape"].includes(e.code)) {
        if (!isEnvBrowser()) fetchNui("hideFrame");
        else setVisible(!visible);
      }
    };

    window.addEventListener("keydown", keyHandler);

    return () => window.removeEventListener("keydown", keyHandler);
  }, [visible]);

  return (
    <VisibilityCtx.Provider
      value={{
        setVisible,
      }}
    >
      <div>{children}</div>
    </VisibilityCtx.Provider>
  );
};

export const useVisibility = () => useContext(VisibilityCtx);
