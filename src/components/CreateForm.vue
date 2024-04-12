<script setup>
import {ref} from "vue";
import { useToast } from "primevue/usetoast";
import {setTrigger} from "@/services/service";

const toast = useToast();

const body = ref('');
const title = ref('');

const error = ref(false);

const post = () => {
  if (body.value === '' || title.value === '') {
    error.value = true;
  } else {
    body.value = '';
    title.value = '';
    error.value = false;
    toast.add({ severity: 'success', summary: 'Save', detail: 'Success!', life: 3000 });
    setTrigger();
  }
}
</script>

<template>
  <div>
    <label for="text" class="block text-900 font-medium mb-2">Title</label>
    <PrimeInputText id="text" v-model="title" type="text" class="w-full mb-3" />

    <label for="body" class="block text-900 font-medium mb-2">Body</label>
    <PrimeTextarea v-model="body" name="body" id="body" class="col-12" rows="5"/>

    <PrimeInlineMessage class="mb-2 w-full" v-if="error" severity="warn">Complete all fields.</PrimeInlineMessage>

    <PrimeButton label="Post!" icon="pi pi-upload" type="button" @click="post" class="w-full"></PrimeButton>
  </div>
</template>

<style>
textarea { resize: vertical; }
</style>
