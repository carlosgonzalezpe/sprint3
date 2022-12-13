import '../css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navegacion } from '../layouts/Navegacion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductoCreado } from '../pages/ProductoCreado';
import { ProductoDetalle } from '../pages/ProductoDetalle';
import { Signup } from '../pages/Signup';
import { Signin } from '../pages/Signin';
import { CrearProducto } from '../pages/CrearProducto';
import { EliminarProductoBoton } from '../components/EliminarProductoBoton';




function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes> 
        <Route path='/' element={<ProductoCreado/>} />
        <Route path='/producto/:id' element={<ProductoDetalle/>}/>
        <Route path='/signup'element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/crearProducto' element={<CrearProducto/>}/>
        <Route path='/eliminarProducto' element={<EliminarProductoBoton/>}/>
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
