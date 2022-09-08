import ItemList from '../Components/ItemList'
import { useEffect, useState } from 'react'
import customFetch from '../utilidades/promesaRenderData'

const listProducts = [

  {
      id:0,
      foto: "https://www.diegocomputacion.com.ar/wp-content/uploads/2020/09/cable-vga.jpg",
      titulo: "Cable",
      precio: "460",
      material: "Goma",
      des:"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  },
  {
      id:1,
      foto: "https://www.diegocomputacion.com.ar/wp-content/uploads/2020/09/cable-vga.jpg",
      titulo: "Cable",
      material: "Goma",
      des:"lorem ipsum"
  }
]

const ItemListContainer = () => {
   const [data, setData] = useState([])

   useEffect(() =>{
    customFetch(2000, listProducts)
    .then(datos =>{setData(listProducts)})
    .catch(err =>{console.log("Error")})
   }, [])
  
      
    return (

      <>
        {
        data.map(item => (

          <ItemList 
          key={item.id} 
          foto={item.foto}
          titulo={item.titulo}
          precio={item.precio}
          material={item.material}
          des={item.des} />
        ))
        }
      </>
    );
}

export default ItemListContainer;