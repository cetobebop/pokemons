<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

<nav class="navbar bg-dark navbar-dark">
  <div class="container">
    <RouterLink class="navbar-brand" to="/">
      <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      PokeApi
    </RouterLink>

    <div  class="btn-group">
      <RouterLink class="btn btn-outline-primary" to="/">Home</RouterLink>
      <RouterLink class="btn btn-outline-primary" to="/pokemons">Pokemons</RouterLink>
      <RouterLink class="btn btn-outline-primary" to="/favorite">Favoritos</RouterLink>
    </div>
  </div>


</nav>


  

  <div class="container text-center">
    <RouterView />
  </div>
</template>

