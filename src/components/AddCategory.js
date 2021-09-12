import React, { useState } from 'react'

import PropTypes from 'prop-types'

// Desestructurar las props es mas sencillo que llamar a props.setCategories en este ejemplo
const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInput = (e) => {
        setInputValue(e.target.value)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if( inputValue.trim().length >= 2){
            // la funcion set si no quieres pasar la referencia de los valores del useState de un componente se puede realizar de esta manera, ya que por parametro llama a el valor con un callback y es más sencillo
            setCategories( cats => [ inputValue, ...cats])
            setInputValue('')

        }


    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInput}
                autoFocus
             />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
