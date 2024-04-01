<script setup>
import AlertButton from "@/components/Alert-button.vue";
import {computed, onMounted, ref} from "vue";

const input = ref(null);
const username = defineModel({ default: 'Kyle C'});

const inputDataValidity = computed({
  get: () => username.value.replaceAll(' ', ''),
  set: (value) => { username.value = value.toString() },
})

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
           :class=" inputDataValidity.length < 8 ? 'invalid-input' : '' "
           v-model="username" />
      <alert-button v-model="username" :usernameLength="inputDataValidity" :username="username" />
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
  input[type=text] {
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    background-color: transparent;
  }

  input[type=text]:focus {
    border-color: lightcoral;
  }

  .disableInput {
    cursor: not-allowed;
    border-color: lightgray;
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