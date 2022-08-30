import logo from '../media/tiendaLogo.png'
import "../App.css"


const NavBar = () =>{
    return(
      <>
      <header>
<div className="contentNavBar">
<img class="logoNav" src={logo} alt="Logo" />
  <ul className="items">
    <li><a href="">Inicio</a></li>
    <li><a href="">Categorias</a></li>
    <li><a href="">Ofertas</a></li>
    <li><a href="">Lo mas nuevo</a></li>
  </ul>
</div>
</header>
      </>
    )
    
  }

export default NavBar
