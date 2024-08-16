import { onMounted, onUnmounted } from "vue";

interface NuiMessageData<T = unknown> {
  action: string;
  data: T;
}

export function useNuiEvent<T = unknown>(
  action: string,
  handler: (data: T) => void
) {

  onMounted(() => {
    const eventListener = (event: MessageEvent<NuiMessageData<T>>) => {
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
