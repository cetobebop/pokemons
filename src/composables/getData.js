import { ref } from "vue"
import axios from "axios"

export const useGetData = () => {
    
    const data = ref(null)
    const loading = ref(false)
    const error = ref(false)

    const information = async (url) => {
        try {
            const res = await axios.get(url)
            data.value = res.data
            
            
        } catch (e) {
            error.value = true
            
        } 
        finally{
            loading.value = true
        }

       
    }

    return{
        information,
        data,
        loading,
        error
    }

}