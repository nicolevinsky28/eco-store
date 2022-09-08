import NavBar from './Components/NavBar'
import ItemListContainer from './Contenedores/ItemListContainer'



const App = () =>{
  return(
    <div>
      <NavBar/>
      <div className='contentProducto'>
      <ItemListContainer />
      </div>
    </div>
  )
}
/* Formas de llamar una funcion de js desde un return:         {Curso()}  o <Curso /> */

export default App
