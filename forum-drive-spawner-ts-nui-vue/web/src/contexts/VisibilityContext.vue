<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted } from 'vue';
import { useNuiEvent } from '../hooks/useNuiEvent';
import { fetchNui } from '../utils/fetchNui';
import { isEnvBrowser } from '../utils/misc';

// Create a reactive state for visibility
const visible = ref(false);

// Provide the visibility state to the children components
provide('visibility', {
  visible,
  setVisible: (value: boolean) => (visible.value = value),
});

// Custom hook for handling events and visibility
useNuiEvent<boolean>('setVisible', (value: boolean) => {
  const resourceName = parent.GetParentResourceName();
  parent.citFrames[resourceName].style.setProperty("visibility", value ? "visible" : "hidden")
  parent.citFrames[resourceName].style.setProperty("z-index", value ? "99999" : "0")

  visible.value = value;
});

onMounted(() => {
  const keyHandler = (e: KeyboardEvent) => {
    if (visible.value && ['Backspace', 'Escape'].includes(e.code)) {
      if (!isEnvBrowser()) fetchNui('hideFrame');
      else visible.value = false;
    }
  };
  window.addEventListener('keydown', keyHandler);
  
  onUnmounted(() => {
    window.removeEventListener('keydown', keyHandler);
  });
});
</script>

<template>
  <div :style="{ height: '100%' }">
    <slot />
  </div>
</template>