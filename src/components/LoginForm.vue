<script setup>
import {defineEmits, ref} from 'vue';

const emit = defineEmits(['signIn'])

const email = ref('');
const signIn = () => {
  emit('signIn', email.value);
}

</script>

<template>
  <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
      <img src="../assets/logo.png" alt="Image"  style="height:50px" class="mb-3" />
      <div class="text-900 text-2xl font-medium mb-3">Welcome Back</div>
    </div>

    <div>
      <label for="email1" class="block text-900 font-medium mb-2">Email</label>
      <PrimeInputText v-model="email" id="email1" type="text" class="w-full mb-3" />

      <PrimeButton label="Sign In" type="button" icon="pi pi-user" @click="signIn" class="w-full"></PrimeButton>
    </div>
  </div>
</template>
