import NavBar from '../Components/NavBar'
import ItemListContainer from '../Contenedores/ItemListContainer'
import ItemDetailContainer from '../Contenedores/ItemDetailContainer'



const Home = () =>{
  return(
    <div>
      <NavBar/>
      <ItemDetailContainer />
    </div>
  )
}
/* Aca abajo se llama al stock, despues del desafio lo vuelvo a subir

      <div className='contentProducto'>
      <ItemListContainer />
      </div>

*/

export default Home