<script setup>
import {ref, watch} from "vue";
// game utils
const question = ref('');
const answer = ref('this is a answer to watch');
const loading = ref(false);
// prevent Game
const isVisible = ref(false);

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

</script>

<template>

  <div v-if="!isVisible">
    <p> do you have a question for me ? </p>
    <span><input type="button" @click="isVisible = true" value="yes"> or <input type="button" @click="$router.push('/')" value="no" ></span>
  </div>
  <!-- render if "yes" button is clicked -->
    <div v-if="isVisible">
      <p>
        Ask a yes/no question:
        <input type="text" v-model="question" :disabled="loading" />
      </p>
      <p>{{ answer }}</p>
    </div>

</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
}

input[type=button] {
  border: 1px solid #ffffff;
  background-color: transparent;
  padding: 5px;
  width: 50px;
  height: 2rem;
  border-radius: 8px;


}
input[type=button]:hover {
  cursor: pointer;
  border-color: lightcoral;
  transition: all 0.5s;

}

input[type=text]{
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  background-color: transparent;
}
</style>