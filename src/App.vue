<script lang="ts" setup>
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <div class="home">
    <HomeView />
  </div>
</template>

<style>
.home {
  display: flex;
  place-content: center;
  height: 100vh;
  flex-direction: column;
}
</style>
