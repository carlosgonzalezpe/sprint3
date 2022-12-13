
import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { EliminarProductoBoton } from "../components/EliminarProductoBoton"
import { PRODUCTODETALLE_GET_ENDPOINTS } from "../connections/Endpoints"

const ProductoDetalle=()=>{

    const [producto, setProducto]= useState([])
    const {id}= useParams()
    const navegar= useNavigate()


    useEffect(()=>{
        axios.get(`${PRODUCTODETALLE_GET_ENDPOINTS}/${id}`)
        .then(respuesta=>{
            setProducto(respuesta.data)
        }).catch(err=>{
           
            navegar(-1)
        })
    },  [id, navegar])

    return(
        <Container className="mt-3 mb-3 text-center"> 
        <Row className="justify-content-md-center">
            <Col sm="12" md="8" lg="6">
                <h3 className="text-center">producto detalle</h3>
                <div className="row justify-content-center text-center">         
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={producto.imagen} />
                        <Card.Body>
                            <Card.Title>{producto.titulo}</Card.Title>
                            <Card.Text> {producto.descripcion}</Card.Text>
                            <Card.Text> {producto.categoria}</Card.Text>
                            <Card.Text className='color-categoria'>{producto.categoria}</Card.Text>
                            <Card.Text >$ {producto.precio}</Card.Text>
                            <EliminarProductoBoton id={producto.idProducto} titulo={producto.titulo}/>
                        </Card.Body>
                    </Card>
                </div>              
             </Col>
        </Row>
    </Container>
     
    );
}

export {ProductoDetalle}