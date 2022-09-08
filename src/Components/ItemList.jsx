
const ItemList = ({foto, titulo, precio, des, material}) =>{


    return(
    <div className="producto">
         <img src={foto} alt="" />
         <h2>{titulo}</h2>
         <h3>Precio: ${precio}</h3>
         <h3>Material: {material}</h3>
         <p>{des}</p>
    </div>
    )
}


export default ItemList