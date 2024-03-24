<script setup>

import WatcherField from "@/components/WatcherField.vue";

</script>

<template>
  <div>
    <div id="hub">
      <p> do you have a question for me ? </p>
      <input type="button" @click="$emit('visible')" value="yes"> or <input type="button" value="no">
    </div>
    <WatcherField/>
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
  border: 1px solid #121315;
  background-color: transparent;
}

</style>