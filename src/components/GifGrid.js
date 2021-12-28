import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import PropTypes from 'prop-types'

// import getGifs from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    // Al desestructurar, se puede renombrar de la siguiente forma, primero con el nombre que recoge el dato a desestructurar y después dos puntos y el alias, es decir data:alias
    const {data:images, loading} = useFetchGifs(category);

    // useEffect ejecuta el código dentro de la funcion cuando el componente es renderizado por primera vez, dentro de la funcion recibe el código que se quiere disparar al renderizarlo, después como segundo parametro de la funcion, se le pasa un array de dependencias, es decir, cuando cambia alguna dependencia, disparar el codigo de nuevo
    // useEffect(() => {
    //     getGifs(category)
    //     .then(images => setImages(images))
    // },[category])
    
   
  
    return (
        <div className="gifs-container">
            {loading && <h2>Loading</h2>}
            <h3 className="category-title animate__animated animate__fadeIn">{ category } </h3>

            
                { images.map( (image) => {
                    return (
                       <GifGridItem
                        key={image.id} 
                        // Con el operador spread utilizado de esta forma es posible mandar las props a un componente de forma independiente, para que se pueda desestructurar más facilmente
                        {...image} 
                        />
                    )
                })}
            
        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
