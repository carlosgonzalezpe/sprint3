import { useState } from "react";
import { Button, Form } from "react-bootstrap";


function CrearProductoFormulario({callback}){
    const [titulo, setTitulo]=useState("")
    const [imagen, setImagen]=useState("")
    const [precio, setPrecio]=useState("")
    const [categoria,setCategoria]=useState("")
    const [descripcion,setDescripcion]=useState("")

    const enviarFormulario=(e)=>{
        e.preventDefault()
        callback({titulo,imagen,precio,categoria,descripcion})

        }

    return(
        <Form onSubmit={enviarFormulario}>
            <Form.Group classname="mb-3" controlId="titulo">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el titulo" required
                    value={titulo} onChange={e => setTitulo(e.target.value)} />
            </Form.Group>
            <Form.Group classname="mb-3" controlId="imagen">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="url" placeholder="Ingrese la imagen" required
                    value={imagen} onChange={e => setImagen(e.target.value)} />
            </Form.Group>
            <Form.Group classname="mb-3" controlId="precio">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" placeholder="Ingrese el precio" required
                    value={precio} onChange={e => setPrecio(e.target.value)} />
            </Form.Group>
            <Form.Group classname="mb-3" controlId="categoria">
                <Form.Label>Categoria</Form.Label>
                <Form.Control as="select" placeholder="Ingrese la categoria" required
                    value={categoria} onChange={e => setCategoria(e.target.value)} >
                <option value="">Seleccione</option>
                <option value="1">Tecnologia</option>
                <option value="2">Ropa</option>
                </Form.Control>
            </Form.Group>
            <Form.Group classname="mb-3" controlId="categoria">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Ingrese la Descripcion" required
                    value={descripcion} onChange={e => setDescripcion(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Crear producto
            </Button>           
        </Form>
    );
}

export default CrearProductoFormulario;