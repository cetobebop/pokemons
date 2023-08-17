<script setup>

import {storeToRefs} from "pinia"
import { RouterLink } from "vue-router";

import {useFavoriteStore} from "@/store/Favorite"



const useFavorite = useFavoriteStore()
 
const {remove} = useFavorite;
const {favoritePokemons} = storeToRefs(useFavorite)
</script>

<template>

    <h1>Favoritos</h1>

    <h3 class="mt-4" v-if="!favoritePokemons.length">Sin pokemons</h3>
    <ul class="list-group" v-else>
       <li class="list-group-item" v-for="pokemon in favoritePokemons" :key="pokemon.id">
            {{ pokemon.name }}

          <div >
            <button class="btn btn-danger mt-1 me-1" @click="remove(pokemon.id)">Remover</button>
            <RouterLink :to="`/pokemons/${pokemon.name}`" class="btn btn-primary mt-1 ms-1">Detalles</RouterLink>
          </div>
        </li> 
    </ul>

</template>