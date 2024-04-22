

const apiKey = 'apikey=47a77402841c98472c249c0d0f06ec7d';
const apiPublic = 'https://gateway.marvel.com:443/v1/public'
const baseOffset = 210

export const getResource = async(url) => {
let res = await fetch(url)

if(!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`)
}
return await res.json()

}

export const getAllCharacters = async(offset = baseOffset, limit=9) => {
    let answ = await getResource(`${apiPublic}/characters?limit=${limit}&offset=${offset}&${apiKey}`)
    
    return await answ.data.results.map(dataConstructor)
}
    export const getCharacter = async(id) => {
        let answ = await getResource(`${apiPublic}/characters/${id}?${apiKey}`).then(res => dataConstructor(res.data.results[0]))

        // getResource(`${apiPublic}/characters/${id}?${apiKey}`).then( res => console.log(res))
    return answ
}

const dataConstructor = (char) => {
    return {
        name: char.name,
        description: char.description ? char.description.slice(0, 50) + '...' : 'Description not found...',
        thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
        homepage: char.urls[0].url,
        wiki: char.urls[1].url,
        id: char.id,
        comics: char.comics.items
       
    }
}
