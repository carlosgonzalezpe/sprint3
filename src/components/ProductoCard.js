import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductoCard({producto}) {
  return (
    <Card style={{ width: 'rem' }}>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title className='color-titulo'>{producto.titulo}</Card.Title>
        <Card.Title>
          <Link to={`/producto/${producto.idProducto}`}>
            {producto.titulo}
          </Link>   
        </Card.Title>
        <Card.Text className='color-precio'>$ {producto.precio}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export {ProductoCard}