

const getGifs = async ( category ) => {
  
        const apiKey = 'iMTXO0dBCgozr9iy5Wz1bt9nidIEw2rG'
        const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=12`
        // encodeURI sirve para que al pasar un valor con espacios en una url estos espacios se reemplacen por valores que los navegadores puedan leer correctamente
        const resp = await fetch(apiUrl)
        const {data} = await resp.json()
        const gifs = data.map( img => {
            return {
                id:img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        return gifs;
}

export default getGifs
