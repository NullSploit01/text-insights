<template>
  <div v-if="params" class="text-area">
    <q-input
      v-model="params.inputText"
      bg-color="teal-2"
      rounded
      rows="25"
      cols="150"
      outlined
      type="textarea"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  params: {
    type: Object,
    required: true,
  },
});

const params = ref(props.params);
</script>
