import logo from '../media/tiendaLogo.png'
import CardWidget from './CardWidget'
import "../App.css"
import { Link } from 'react-router-dom'

const NavBar = () =>{
    return(
      <>
      <header>
<div className="contentNavBar">
   <Link to='/'> <img class="logoNav" src={logo} alt="Logo" /> </Link>
  <ul className="items">
  <Link to='/'> <li><a>Inicio</a></li> </Link>
  <Link to='/category/2'> <li><a>Vivero</a></li> </Link>  
  <Link to='/category/1'> <li><a>Biodegradables</a></li> </Link>   
  <Link to='/category/3'> <li><a href="">Indumentaria</a></li> </Link> 
  </ul>
  <div className="carrito">
    <CardWidget />
  </div>
</div>
</header>

      </>
    )
    
  }

export default NavBar
