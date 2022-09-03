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
      @update:model-value="updateParams"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { countWords } from "@/utils/count-words";
import { countLines } from "@/utils/count-lines";
const props = defineProps({
  params: {
    type: Object,
    required: true,
  },
});

const params = ref(props.params);

const updateParams = () => {
  params.value.countOfWords = countWords(params.value.inputText);
  params.value.countOfCharacters = params.value.inputText.length;
  params.value.countOfLines = countLines(params.value.inputText);
};
</script>
