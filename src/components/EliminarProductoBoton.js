import axios from "axios"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { ELIMINARPRODUCTO_DELETE_ENDPOINTS } from "../connections/Endpoints"

const EliminarProductoBoton=({id})=>{
    
    const navegar= useNavigate()

    const eliminar=  ()=>{
        axios.delete(`${ELIMINARPRODUCTO_DELETE_ENDPOINTS}/${id}`)
        .then(respuesta=>{
            navegar("/")
        })
        .catch(err=>{
            console.error(err);
        })
    }

    const crearAlerta= ()=>{
        const titulo="Eliminar producto \n ¿Desea eliminar el producto?"

        return (window.confirm(titulo) ===true) ? eliminar() : ()=>{}
    }
    return(
        <Button variant="danger" size="sm"
            onClick={crearAlerta}
        >
            
            Eliminar
        </Button>           
    )
}
export {EliminarProductoBoton}
