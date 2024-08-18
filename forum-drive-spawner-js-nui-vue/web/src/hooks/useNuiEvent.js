import { onMounted, onUnmounted, watch } from "vue";

export function useNuiEvent(action, handler) {
  onMounted(() => {
    const eventListener = (event) => {
      const { action: eventAction, data } = event.data;

      if (eventAction === action) {
        handler(data);
      }
    };

    window.addEventListener("message", eventListener);

    onUnmounted(() => {
      window.removeEventListener("message", eventListener);
    });
  });
}
