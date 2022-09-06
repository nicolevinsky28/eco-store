import "../App.css"
import { useNumeroContador } from 'react';


const ContadorProductos = (numero) =>{
   numero = 0
    const [numeroContador, setNumeroContador] = useNumeroContador(0);
    const sumar = () => {
        setNumeroContador(numeroContador+1);
    }
    const restar = () => {
      setNumeroContador(numeroContador-1);
  }
    return(
      <div className="contador">
        numer
        <button onClick={sumar}>+</button> 
        <p>{numero}</p>
        <button onClick={restar}>-</button>
      </div>
    )
    
  }

export default ContadorProductos
