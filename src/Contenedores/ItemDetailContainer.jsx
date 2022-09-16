import ItemDetail from '../Components/ItemDetail'
import { useEffect, useState } from 'react'
import customFetch from '../utilidades/promesaRenderData'
import { useParams } from 'react-router-dom'
const listProducts = [

    {
        id:0,
        foto: "https://images-na.ssl-images-amazon.com/images/I/71wyQL2hywS._AC._SR360,460.jpg",
        titulo: "Macetas biodegradables",
        precio: "200",
        material: "Carton",
        des:"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
    {
        id:1,
        foto: "https://www.diegocomputacion.com.ar/wp-content/uploads/2020/09/cable-vga.jpg",
        titulo: "Cable",
        material: "Goma",
        des:"lorem ipsum"
    },
    {
      id:2,
      foto: "https://www.diegocomputacion.com.ar/wp-content/uploads/2020/09/cable-vga.jpg",
      titulo: "Cable",
      material: "Goma",
      des:"lorem ipsum"
  }
  ]


const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const { idItem } = useParams()

    useEffect(() =>{
      if ( idItem ){
        customFetch(2000, listProducts.find(item => item.id == idItem))
        .then(datos =>setData(datos))
        .catch(err =>{console.log(err)})
      } else{
        customFetch(2000, listProducts)
        .then(datos =>{setData(listProducts)})
        .catch(err =>{console.log(err)})
      }
     }, [idItem])
     return (

       <>
         {
 
           <ItemDetail 
           key={data.id} 
           fotoDetail={data.foto}
           tituloDetail={data.titulo}
           precioDetail={data.precio}
           materialDetail={data.material}
           desDetail={data.des} />
         }
       </>
     );
 }

 export default ItemDetailContainer;