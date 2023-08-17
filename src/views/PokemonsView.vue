
<script setup>
    
    import { RouterLink } from "vue-router";
    import {useGetData} from "@/composables/getData"
    
    
    const {data, information, loading, error} = useGetData()

    information(`https://pokeapi.co/api/v2/pokemon`)
   
   
    
</script>

<template>


   <div class="container">

    <h1 class="mb-3">Pokemons</h1>
    <h3 v-if="!loading">cargando</h3>
    
    <div v-else>
    <div class="alert alert-danger container text-center" v-if="error">Error en el servidor</div>
    <ul class="list-group">
        <li v-for="pokemon in data?.results" class="list-group-item">
        <RouterLink :to="`/pokemons/${pokemon.name}`">
            {{ pokemon.name }}
        </RouterLink>
    </li>
    </ul>

    <div class="mt-4">
        <button :disabled="!data.previous" class="btn btn-success me-2" @click="information(data.previous)">Previus</button>
        <button :disabled="!data.next" class="btn btn-success" @click="information(data.next)">Next</button>
    </div>
    
    
    </div>
   </div>


    

</template>