import axios from "axios"
import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


const CrearProducto=()=>{
    const navegar=useNavigate()
    const crear= (producto)=>{
        axios.post()
        .then(respuesta=>{
            console.log(respuesta.data)
            navegar("/")
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    return(
        <Container className="mt-3 md-3 text-center">
            <h3>Producto Actualizar</h3>
            <Row className="justify-content-center">
                <Col sm="12" md="8" lg="6">
                    <Row className="justify-content-center">
                        <CrearProductoFormulario callback={crear}/>
                    </Row>
                </Col>           
            </Row>
        </Container>       
    );
}
export {CrearProducto}
