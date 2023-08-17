import {defineStore} from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore ("counter", ()=>{

    const counter = ref(0)

    function increment() {
        counter.value++
    }

    const double = computed(() => counter.value * 2) 


    return{
        counter,
        increment,
        double
    }
})
