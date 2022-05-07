<template>
  <div>
    <p>123sdfdsf</p>
    <button @click="send('Unmute')">{{ toggleButtonLabel }}</button>
    <button>Hide video</button>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";

import { useMachine } from "@xstate/vue";
// import promiseMachine from "./dogMachine";
// import machine from "./dogMachine";
import machine2 from "./dogMachine";

export default {
  name: "App",
  components: {},
  setup() {
    const { state } = useMachine(machine2);
    const toggleButtonLabel = computed(() => {
      const current = state.value;
      if (current.matches("Unmuted")) {
        return "Unmuted";
      } else if (current.matches("Muted")) {
        return "Muted";
      }
    });
    return {
      toggleButtonLabel,
    };
  },
};
</script>

<style></style>
