<script setup>

import {computed, onMounted, ref} from "vue";

const username = defineModel({ default: 'invalid'});

const inputData = computed({
  get: () => username.value.replaceAll(' ', ''),
  set: (value) => { username.value = value.toString() },
})

const input = ref(null);
onMounted(()=>{
  // used to focus user attention on a specific element on load
  input.value.focus()
  console.log("[Info] Form View loaded successfully");
})
</script>

<template>
  <div class="form-view">
    <label for="username">Username</label>
    <input type="text"
           placeholder="enter a username"
           ref="input"
           :class=" inputData.length < 8 && inputData.length !== 0 ? 'invalid-input' : '' "
           v-model="username" />
    <p :class="inputData.length < 8 && inputData.length !== 0 ? 'invalid-warning' : 'valid-warning' ">votre non d'utilisateur dois comporter au moins 8 caractère </p>
  </div>
</template>

<style scoped>
  .form-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 1rem;
  }
  .form-view input {
    border: 1px solid #ccc;
    background: none;
    padding: 0.5rem;

    outline: none;

    width: 150px;
  }

  .invalid-input {
    border-color: red !important;
  }
  .invalid-warning {
    display: initial;
    font-size: small;

    margin-top: 0.5rem;
    padding: 0.5rem;

    border: 1px solid orange;

    width: 200px !important;

    animation: blink 1s linear infinite;
  }
  .valid-warning {
    display: none;
  }

  @keyframes blink {
    0%, 100% {
      border-color: transparent;
      background-color: transparent;
    }
    1% {
      border-color: orange;
      background-color: rgba(255, 165, 0, 0.46);
    }
  }

</style>