<script setup>
import StatsElement from "@/components/StatsElement.vue";
import {computed, onMounted, ref, watch} from "vue";
import {getPosts, getTrigger} from "@/services/service";

const elements = ref([]);

onMounted(async () => {
  elements.value = await getPosts();
})

const handleStep = () => {
  let user = elements.value[4];
  user.posts += 50;
  elements.value = [...elements.value];
}

const topPosition = computed(() => getTrigger());

watch(topPosition, async (newValue) => {
  if (newValue) {
    handleStep();
  }
})

const sortedElement = computed(() =>   {
  if (elements.value.length < 1) {
    return [];
  }
  return [...elements.value].sort((a, b) =>
    a.posts === b.posts
      ? a.username.localeCompare(b.username)
      : a.posts > b.posts
        ? -1
        : 1
  );
}
);
</script>

<template>
  <div class="leaderboard shadow-2 border-round">
    <p class="text-900 text-2xl font-medium">Leaderboard</p>
    <PrimeInlineMessage class="mb-2 w-full" :key="topPosition" v-if="topPosition" severity="info">You are in the top!</PrimeInlineMessage>
    <transition-group
        move-class="leaderboard__item--move"
        v-if="elements.length > 0"
    >
      <StatsElement
          v-for="(element, index) in sortedElement"
          :key="element"
          :element="element"
          :idx="index"
      />
    </transition-group>
    <p class="message" v-else>Nothing to show</p>
  </div>
</template>

<style>
.leaderboard {
  font-family: Arial, Helvetica, sans-serif;
  list-style: none;
  margin: auto;
  padding: 2rem;
}
.leaderboard__item--move {
  transition: transform 0.2s;
}
.message {
  text-align: center;
}
</style>
