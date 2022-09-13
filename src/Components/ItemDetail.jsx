

const ItemDetail = ({fotoDetail, tituloDetail, precioDetail, desDetail, materialDetail}) =>{

    return(
        <div className="productoDetail">
            <div className="imagen">
             <img src={fotoDetail} alt="" />
            </div>
            <div className="content">
                <div className="text">
                <h2>{tituloDetail}</h2>
                <h3>Precio: ${precioDetail}</h3>
                <h3>Material: {materialDetail}</h3>
                <p>{desDetail}</p>
                </div>
            </div>
        </div>
        )
}


export default ItemDetail