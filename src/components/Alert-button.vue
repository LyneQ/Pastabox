<script setup>
const props = defineProps(['username'])
</script>

<template>
  <input type="button"
         value="Envoyer"
         @click="$emit('alert', props.username ? props.username : 'Missing username')">
</template>

<style scoped>

.disable {
  cursor: not-allowed;

}

</style>