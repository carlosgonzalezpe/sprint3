import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ProductoCard } from "../components/ProductoCard"
import { PRODUCTOCREADO_GET_ENDPOINTS } from "../connections/Endpoints"

const ProductoCreado= ()=>{

    const [productos, setProductos]= useState([])


    useEffect(()=>{
        axios.get(PRODUCTOCREADO_GET_ENDPOINTS)
        .then(respuesta=>{
            setProductos(respuesta.data)
        }).catch(err=>{
            console.error(err);       
        })

    }, []);

    return(
        <Container className="mt-3 mb-3"> 
            <Row className="justify-content-md-center">
                <Col sm="10" md="6" lg="4">
                    <h3 className="text-center">Producto Creado</h3>
                    <div className="row-justify-content-center text-center">  
                       {productos.map(producto=> <ProductoCard key={producto.idProducto} producto={producto} />)}
                    </div>              
                </Col>
            </Row>
        </Container>

         )
}

export {ProductoCreado}