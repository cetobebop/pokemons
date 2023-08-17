<script setup>
    
    import {useRoute, useRouter} from "vue-router"
    

    import {useGetData} from "@/composables/getData"
    import {useFavoriteStore} from "@/store/Favorite"
import { onMounted } from "vue";
    
    
    const useFavorite = useFavoriteStore()
  
    const route = useRoute()
    const router = useRouter()
    
    const {add, blockButton} = useFavorite;
    

    const {data, information, loading, error} = useGetData()

    const back = () =>{
        router.push("/pokemons")
    }

    information(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

    console.log(data)

   
</script>

<template>


    
    <h3 v-if="!loading">Cargando...</h3>
    <div v-if="data && loading">

        <img :src="data.sprites?.front_default" alt="">
        <h3>pokemon name: {{ $route.params.name }}</h3>
        
        <button class="btn btn-primary mb-3" :disabled="!blockButton(data.id)" @click="add(data)">Añadir a favoritos</button>
    </div>

    <div class="alert alert-danger mt-3" v-else-if="error">No existe</div>
    <button class="btn btn-outline-primary" @click="back">Volver</button>
</template>