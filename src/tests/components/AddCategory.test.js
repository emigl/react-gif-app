import {shallow} from 'enzyme'
import AddCategory from '../../components/AddCategory'
describe('Test para el componente AddCategory', () => {
    // jest.fn() es una función vacía para simular parametros de funcion, pero este te permite varias funcionalidades  de testing extra gracias a jest.
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)
    const value = 'Mr Robot'
    




    beforeEach(() => {
        // Para limpiar los mocks en cada test.
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('deberia de renderizar el componente correctamente con snapshot', () => {

        expect(wrapper).toMatchSnapshot()

    })
    
    test('debe de cambiar la caja de texto', () => {


        const input = wrapper.find('input')
        
        // simulate como segundo parametro hay que poner el valor que espera la funcion que se está simulando, con un objeto en este caso.
        input.simulate('change', {
            target: {
                value: value
            }
        })
    })

    test('no debe de postear con el boton submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect(setCategories).not.toHaveBeenCalled()

    })

    test('debe de llamar el setCategories y limpiar el input', () => {

        const input = wrapper.find('input')

        input.simulate('change', {
            target: {
                value: value
            }
        })

        wrapper.find('form').simulate('submit', {preventDefault(){}})

        // toHaveBeenCalled sirve para ver si se ha llamado a una funcion pasada por el parametro de expect()
        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

        expect(input.text()).toBe('')



    })
    
    
    
})
