<script setup>
import {defineProps} from "vue";

defineProps(['element', 'idx'])

const position = (id) => {
  switch (id) {
    case 0:
      return 'first';
    case 1:
      return 'second';
    case 2:
      return 'third';
    default:
      return ''
  }
}
</script>

<template>
  <div class="leaderboard__item" :class="position(idx)">
    <span>{{idx+1}}</span>
    <span class="leaderboard__user">{{ element.username }}</span>
    <span class="leaderboard__score">
       {{ element.posts }} {{ element.posts === 1 ? "post" : "posts" }}
    </span>
  </div>
</template>

<style>
.leaderboard__item {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  padding: 0.25rem;
}
.leaderboard__user {
  text-align: left;
  width: 30%;
}
.leaderboard__score {
  text-align: right;
  width: 30%;
}
.first {
  background-color: yellow;
}
.second {
  background-color: lightgray;
}
.third {
  background-color: sandybrown;
}
</style>
