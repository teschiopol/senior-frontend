<script setup>
import StatsSide from "@/layout/StatsSide.vue";
import UserSide from "@/layout/UserSide.vue";
</script>

<template>
  <PrimeToast/>
  <div class="flex">
    <div class="flex-1 p-4"><StatsSide/></div>
    <div class="flex-1 p-4"><UserSide/></div>
  </div>
</template>
