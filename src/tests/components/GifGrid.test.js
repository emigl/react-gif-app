
import {shallow} from 'enzyme'
import GifGrid from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
// mock() fingirá que tiene la data que trae useFetchGifs sin llamarla directamente
jest.mock('../../hooks/useFetchGifs')

describe('Test de GifGrid component', () => {
    
    const category = 'Evangelion'

    test('debera renderizar correctamente con el snapshot', () => {
        // Se usa de esta forma el mockReturnValue y se pasa por parámetro el mismo objeto que espera los componentes que llaman a el metodo useFetchGifs
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={category}/>)

        expect(wrapper).toMatchSnapshot()
        
    })

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [{
            id: '231e',
            url: 'https://localhost/cualquiercosa.png',
            title: 'Esto es un titulo'
        },
        {
            id: 'njhubnu',
            url: 'https://localhost/c2.png',
            title: 'Esto es 2'
        },
        {
            id: '1231288',
            url: 'https://localhost/c3.png',
            title: 'Esto es 3'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid category={category}/>)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('h2').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
     
    })
    
    
})
