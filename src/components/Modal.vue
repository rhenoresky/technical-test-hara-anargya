<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  show: Boolean,
});
</script>

<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="fixed z-50 flex items-center justify-center w-full h-full bg-black/50"
    >
      <div class="relative p-6 bg-white rounded h-fit w-fit drop-shadow-md">
        <button @click="$emit('close')" class="absolute top-2 right-2">
          <Icon
            icon="material-symbols:close"
            style="font-size: 24px; color: #fa1212"
          />
        </button>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-leave-to,
.modal-enter-from {
  opacity: 0;
}

.modal-leave-from,
.modal-enter-to {
  opacity: 1;
}

.modal-leave-active,
.modal-enter-active {
  transition: opacity 0.3s;
}
</style>
