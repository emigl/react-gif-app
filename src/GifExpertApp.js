import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    const arrayCategories = ['EVANGELION']

    const [categories, setCategories] = useState(arrayCategories)

    // const handleAdd = () => {
    //     // Para usar setCategories se necesita utilizar el operador spread del array que NO hay que mutar, y con ese operador crea una copia de ese array u objeto, según lo que se haya creado, se necesitan las llaves [] para decirle que es un array, si categories fuera un objeto supongo que habría que utilizar {}
    //     setCategories([...categories,'HunterXHunter'])

    //     // Al recibir un callback la funcion, el parametro "cats" sería la variable "categories" en este caso, es decir, que el callback llama a la funcion donde se almacena la información del hook useState
    //    setCategories( cats => [...cats, 'HunterXHunter'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            
                {
                    categories.map( category => (
                        <GifGrid 
                        key = {category}
                        category = {category} />
                    ))
                }
            
        </>
    )
}

export default GifExpertApp
