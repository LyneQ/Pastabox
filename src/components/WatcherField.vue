<script setup>
const props = defineProps(['visible'])


import {ref, watch} from "vue";

const question = ref('');
const answer = ref('this is a answer to watch');
const loading = ref(false);

/*
* Watch regarde en permanence l'état d'une "ref" et permet de suivre l'évolution de celui-ci
*/
watch(question, async (newValue, oldValue) => {
  if (newValue.includes("?")) {
    loading.value = true;
    answer.value = "thinking..."

    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  }
})

/**
 * show component with a button (with watcher)
 */
</script>

<template>
  <div @class="checkVisible === true ? 'visible' : 'invisible'">
    <p>
      Ask a yes/no question:
      <input v-model="question" :disabled="loading" />
    </p>
    <p>{{ answer }}</p>
  </div>

</template>

<style scoped>
.visible{
  visibility: visible;
}

.invisible{
  visibility: hidden;
}

input{
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  background-color: transparent;
}
</style>