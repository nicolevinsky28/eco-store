import ItemList from '../Components/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import customFetch from '../utilidades/promesaRenderData'
import { Category } from '@mui/icons-material'

const listProducts = [

  {
      id:0,
      foto: "https://images-na.ssl-images-amazon.com/images/I/71wyQL2hywS._AC._SR360,460.jpg",
      titulo: "Cable",
      precio: "460",
      material: "Goma",
      des:"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      categoryId: 1,
  },
  {
      id:1,
      foto: "https://www.diegocomputacion.com.ar/wp-content/uploads/2020/09/cable-vga.jpg",
      titulo: "Cable",
      material: "Goma",
      des:"lorem ipsum",
      categoryId: 2,
  },
  {
    id:2,
    foto: "https://plantamadrerosario.com/tienda/wp-content/uploads/2021/09/IMG_20210908_192800_copy_2700x3600-scaled.jpg",
    titulo: "Cable",
    material: "Goma",
    des:"lorem ipsum",
    categoryId: 2,
},
{
  id:3,
  foto: "https://www.diegocomputacion.com.ar/wp-content/uploads/2020/09/cable-vga.jpg",
  titulo: "Cable",
  material: "Asa",
  des:"lorem ipsum",
  categoryId: 3,
}
]

const ItemListContainer = () => {
   const [data, setData] = useState([])
   const { idCategory } = useParams()

   useEffect(() =>{
    if (idCategory){
      customFetch(2000, listProducts.filter(item => item.categoryId == idCategory))
      .then(datos =>setData(datos))
      .catch(err =>{console.log(err)})
    } else{
      customFetch(2000, listProducts)
      .then(datos =>{setData(listProducts)})
      .catch(err =>{console.log(err)})
    }
   }, [idCategory])
  
      
    return (

      <>
        {
        data.map(item => (

          <ItemList 
          id={item.id}
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