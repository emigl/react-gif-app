import { renderHook } from '@testing-library/react-hooks';
const { useFetchGifs } = require("../../hooks/useFetchGifs");


describe('Pruebas en el hook useFetchGifs', () => {
    

    test('debe retornar el estado incial', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        const {data, loading} = result.current
        console.log(result)
        console.log(result.current)
        await waitForNextUpdate()
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('debe de retornar un arreglo de imgs y loading:false', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate()
        const {data, loading} = result.current

        expect(data.length).toBe(12);
        expect(loading).toBe(false);


    })
    
})

