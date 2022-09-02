<template>
  <div class="home">
    <h3 class="heading">Text Insights {{ params.inputText }}</h3>
    <TextAreaInput :params="params" />
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
import { ref } from "vue";
const params = ref({
  inputText: null,
});
</script>
