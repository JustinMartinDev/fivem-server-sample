import { inject } from "vue";

export function useVisibility() {
  const visibility = inject("visibility");

  if (!visibility) {
    throw new Error("useVisibility must be used within a VisibilityProvider");
  }

  return visibility;
}
