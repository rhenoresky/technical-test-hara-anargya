<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  show: Boolean,
  user: Object,
});
</script>

<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="fixed z-50 flex items-center justify-center w-full h-full bg-black/50"
    >
      <div
        class="h-[440px] w-[560px] bg-white rounded p-6 relative drop-shadow-md"
      >
        <button @click="$emit('close')" class="absolute top-2 right-2">
          <Icon
            icon="material-symbols:close"
            style="font-size: 24px; color: #fa1212"
          />
        </button>
        <div class="flex flex-col w-full gap-8 p-2">
          <div class="flex items-center justify-center w-full gap-6">
            <div class="w-[160px] rounded-full overflow-hidden drop-shadow">
              <img
                :src="user.profile_picture"
                alt="Image"
                class="object-cover object-center w-full"
              />
            </div>
            <div class="flex flex-col gap-2">
              <h4 class="font-medium text-[32px]">
                {{ `${user.first_name} ${user.last_name}` }}
              </h4>
              <p class="font-medium text-[16px]">{{ user.email }}</p>
              <p class="font-medium text-[16px]">{{ user.phone }}</p>
            </div>
          </div>
          <div class="flex items-center justify-center gap-8">
            <div class="flex flex-col order-2 gap-2">
              <p class="font-medium">
                Gender: <span class="text-slate-500">{{ user.gender }}</span>
              </p>
              <p class="font-medium">
                Job: <span class="text-slate-500">{{ user.job }}</span>
              </p>
              <p class="font-medium">
                City: <span class="text-slate-500">{{ user.city }}</span>
              </p>
              <p class="font-medium">
                Country: <span class="text-slate-500">{{ user.country }}</span>
              </p>
              <p class="font-medium">
                Date of birth:
                <span class="text-slate-500">{{
                  new Date(user.date_of_birth).toISOString().substring(0, 10)
                }}</span>
              </p>
            </div>
            <div class="flex flex-col order-1 gap-2">
              <p class="font-medium">
                State: <span class="text-slate-500">{{ user.state }}</span>
              </p>
              <p class="font-medium">
                Street: <span class="text-slate-500">{{ user.street }}</span>
              </p>
              <p class="font-medium">
                Zip code: <span class="text-slate-500">{{ user.zipcode }}</span>
              </p>
              <p class="font-medium">
                Latitude:
                <span class="text-slate-500">{{ user.latitude }}</span>
              </p>
              <p class="font-medium">
                Longitude:
                <span class="text-slate-500">{{ user.longitude }}</span>
              </p>
            </div>
          </div>
        </div>
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
