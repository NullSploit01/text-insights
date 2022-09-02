<template>
  <div class="home">
    <h3 class="heading">Text Insights</h3>
    <TextAreaInput :params="params" />
    <TextInsights :params="params" />
  </div>
</template>

<style>
.heading {
  color: #eeeeee;
}

.home {
  display: flex;
  place-items: center;
}
</style>

<script setup lang="ts">
import TextAreaInput from "@/components/TextAreaInput.vue";
import TextInsights from "@/components/TextInsights.vue";
import { ref } from "vue";

const params = ref({
  inputText: null,
  countOfWords: 0,
});
</script>
