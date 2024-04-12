<script setup>
import StatsSide from "@/layout/StatsSide.vue";
import UserSide from "@/layout/UserSide.vue";
</script>

<template>
  <PrimeToast/>
  <div class="grid">
    <div class="col-12 md:col-6 p-4"><StatsSide/></div>
    <div class="col-12 md:col-6 p-4"><UserSide/></div>
  </div>
</template>
