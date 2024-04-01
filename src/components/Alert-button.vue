<script setup>
/**
 * v-model etabli une connexion entre le parent et l'enfant servant au partage d'information (renvoie automatiquement une ref)
 * @type {ModelRef<unknown | undefined, string>}
 */
const username = defineModel('username');
const usernameLength = defineModel('usernameLength');

const showAlert = () =>{
  alert( username.value ? `Bonjour ${username.value}` : 'Missing username' )
}
</script>

<template>
  <input type="button"
         value="Envoyer"
         :disabled="usernameLength.length < 8"
         @click="showAlert"/>
</template>

<style scoped>

input[type=button]{
  border: 1px solid #ccc;
  border-radius: 8px;
  background: none;
  margin-top: 5px;
  padding: 0.5rem;
  outline: none;
  width: 150px;
  transition: all 0.5s;
}
input[type="button"]:hover{
  cursor: pointer;
  border-color: lightcoral;
  transition: all 0.5s;
}

input[type=button]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

</style>