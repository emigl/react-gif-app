import getGifs  from '../../helpers/getGifs'

describe('Pruebas con getGifs Fetch', () => {

    // Si al hacer el test vas a usar metodos asincronos, debes de hacer la funcion del test asincrona tambien
    test('debe traer 12 elementos', async () => {
      const gifs = await getGifs('Konosuba')

      expect(gifs.length).toBe(12)
    })

})
