import NavBar from '../Components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from '../Contenedores/ItemListContainer'
import ItemDetailContainer from '../Contenedores/ItemDetailContainer'



const Home = () =>{
  return(
    <BrowserRouter>
    <NavBar /> 
    <Routes>
      <Route  path='/' element={<div className='contentProducto'> <ItemListContainer /> </div>} />
      <Route  path='/category/:idCategory' element={ <div className='contentProducto'> <ItemListContainer /> </div>} />
      <Route  path='/item/:idItem'  element={ <ItemDetailContainer /> } />
    </Routes>
    </BrowserRouter>
  )
}
/* Aca abajo se llama al stock, despues del desafio lo vuelvo a subir

      <div className='contentProducto'> <ItemListContainer /> </div>

*/

export default Home