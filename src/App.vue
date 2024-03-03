<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="centeredItem">
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/calendar"> Calendrier </RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

header {
  padding: 5px;

  background-color: #2c2f33;
  border-bottom: 1px solid white;
}

nav {
  display: flex;
  height: 30px;
}
nav a {
  margin: 10px 0;
  padding: 10px;

  color: lightcoral;

  text-underline-offset: 2px;
}

.centeredItem {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

</style>
