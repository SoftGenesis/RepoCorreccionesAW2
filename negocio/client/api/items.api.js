import { API } from "./api.js"

export const getItemsById = async(idItem)=>{
    /*Esta incompleto*/
    try{
        const res = await fetch(`${API}/productos/byId/${idItem}`,{
            method:"GET",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        //return res
        /*if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }*/

        const data = await res.json() // Parsear la respuesta a JSON
        return data // Devolver los datos para usarlos en otro lado*?*/
    }catch(error){
        console.log(error)
        return {status: false}
    }
}