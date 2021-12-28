import React from 'react'
import {shallow} from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Test de la card del gifGridItem', () => {

    const title = 'Esto es un titulo'
    const url = 'https://localhost:3000/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot()

    })

    test('debe de tener un parrafo con el title', () => {

        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })

    test('debe de tener la imagen igual al url y al alt de los props', () => {

        const img = wrapper.find('img')
        
        expect(img.props().src).toBe(url)
        // Se puede utilizar props().<nombre-atributo> o prop('nombre-atributo')
        expect(img.prop('alt')).toBe(title)
    })

    test('debe de tener la clase animate__fadeIn', () => {
        
        const div = wrapper.find('div')

        expect(div.prop('className').includes('animate__fadeIn')).toBe(true)

    })
    
})
