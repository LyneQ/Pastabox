<script setup>

</script>

<template>
  <main>
    <div class="card">
      <img src="/pfp.gif" alt="Avatar">
      <div class="card-body">
        <h1>
          Bienvenue sur Pastabox
        </h1>
        <p>
          Bonjour à tous,<br>
          <br>
          Ce projet représente mon parcours d'apprentissage et d'expérimentation avec Vue.js.<br>
          Explorez et découvrez les fonctionnalités que j'ai maîtrisées, des composants aux transitions.<br>
          <br>
          Cordialement,<br>
          LyneQ
        </p>
      </div>
    </div>

  </main>
</template>

<style scoped>
  main {
    min-height: 95vh;

    text-align: center;

    height: 100%;
    line-height: 100%;
  }
  img {
    float: left;
    margin-right: 20px;
    border-radius: 15%;
  }

  .card {
    display: inline-block;

    margin: 25px;
    padding: 25px;

    max-width: 50vw;

    vertical-align: middle;
    line-height: normal;

    background-color: #2c2f33  ;
  }
  .card-body {
    margin: 0 50px;
    text-align: initial;
  }

  .card-body > h1 {
    margin: 5px 0;
  }
</style>