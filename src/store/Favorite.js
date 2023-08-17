import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoriteStore = defineStore ("favorite", ()=>{

    const favoritePokemons = ref([])

    if(localStorage.getItem("favoritos")) {
        favoritePokemons.value = JSON.parse(localStorage.getItem("favoritos"))
    }

    const add = (pokemon) => {
        favoritePokemons.value.push(pokemon)
        localStorage.setItem("favoritos", JSON.stringify(favoritePokemons.value))
    }

    const remove = (id) => {    
        favoritePokemons.value = favoritePokemons.value.filter (e => e.id !== id)
        localStorage.setItem("favoritos", JSON.stringify(favoritePokemons.value))
    }

    const blockButton = (id) => favoritePokemons.value.every( value => value.id !== id )
    

    return{
        favoritePokemons,
        add,
        remove,
        blockButton
    }

})