import logo from '../media/tiendaLogo.png'
import CardWidget from './CardWidget'
import "../App.css"


const NavBar = () =>{
    return(
      <>
      <header>
<div className="contentNavBar">
<img class="logoNav" src={logo} alt="Logo" />
  <ul className="items">
    <li><a href="https://github.com/">Inicio</a></li>
    <li><a href="https://github.com/">Categorias</a></li>
    <li><a href="https://github.com/">Ofertas</a></li>
    <li><a href="https://github.com/">Lo mas nuevo</a></li>
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
