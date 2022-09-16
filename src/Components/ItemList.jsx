import { Link } from 'react-router-dom'
const ItemList = ({foto, titulo, precio, des, material, item, id}) =>{


    return(
    <div className="producto">
         <img src={foto} alt="" />
         <h2>{item}</h2>
         <h3>Precio: ${precio}</h3>
         <h3>Material: {material}</h3>
         <p>{des}</p>
        <Link to={`/item/${id}`}><button>Ver detalles</button></Link>
    </div>
    )
}


export default ItemList