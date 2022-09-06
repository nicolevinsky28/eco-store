import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import ContadorProductos from './Components/ContadorProductos'


const App = () =>{
  return(
    <div>
      <NavBar/>
        <ItemListContainer greeting="Este es el ItemListContainer"/>
        <ContadorProductos />
    </div>
  )
}
/* Formas de llamar una funcion de js desde un return:         {Curso()}  o <Curso /> */

export default App
