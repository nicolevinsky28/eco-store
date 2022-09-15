import NavBar from '../Components/NavBar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemListContainer from '../Contenedores/ItemListContainer'
import ItemDetailContainer from '../Contenedores/ItemDetailContainer'



const Home = () =>{
  return(
    <BrowserRouter>
    <Switch>
      <Route patch='/' > <ItemDetailContainer /> </Route>
      <Route patch='/category/:id'> <p>Hola1</p> </Route>
      <Route patch='/item/:id'> <p>Hola2</p> </Route>
    </Switch>
     { /*<NavBar/> */}
    </BrowserRouter>
  )
}
/* Aca abajo se llama al stock, despues del desafio lo vuelvo a subir

      <div className='contentProducto'> <ItemListContainer /> </div>

*/

export default Home