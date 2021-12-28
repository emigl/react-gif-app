import {shallow} from 'enzyme'
import GifExpertApp from '../GifExpertApp'

describe('Test de GifExpertApp component', () => {
    


    test('debe de hacer match con el snapshot', () => {
        
        const wrapper = shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot()
    })
    
    test('debe de mostrar una lista de categorias', () => {
        
        const categories = ['One Punch', 'Dragon Ball']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categories.length)

    })
    
})
