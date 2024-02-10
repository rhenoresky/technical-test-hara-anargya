<script setup>
import Sidebar from "../components/Sidebar.vue";
import { useRoute } from "vue-router";
import province from "../assets/js/province";
import city from "../assets/js/city";
import { onMounted } from "vue";

const route = useRoute();

onMounted(() => {
  console.log({ province });
  console.log({ city });
});
</script>

<template>
  <div class="flex w-full h-screen font-inter">
    <Sidebar :path="route.path" />
    <div class="w-full bg-slate-100">
      <h1 class="px-8 py-4 font-semibold bg-white drop-shadow">Conversion</h1>
    </div>
  </div>
</template>
