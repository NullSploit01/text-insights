<template>
  <div v-if="params">
    <h3 class="heading">Words: {{ params.countOfWords }}</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  params: {
    type: Object,
    reruired: true,
  },
});

const params = ref(props.params);
</script>
