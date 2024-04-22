import { useEffect, useState } from "react"
import { HeroCards } from "./HeroCards/HeroCards"
import { getAllCharacters } from "../../Services/Services"
import { Card } from "./Card/Card"
import "./Container.scss"
import vision from '../../images/vision.png'
import { Button } from "react-bootstrap"
import { HeroFinder } from "./HeroFinder/HeroFinder"




export const Container = () => {

    const [cards, changeCards] = useState({
        chars: [],
        offset: 210,
        loading: true,
        charId: null
     

    })
    const [heroes, setHeroes] = useState(null)
    const getMore = (newOffset) => {
        changeCards((item) => (
            {   chars: [...item.chars],
                offset: item.offset + 9,
                loading: true
            }
        )  )
      
        getAllCharacters(newOffset).then(newChars => changeCards((prev) => {
          return  {
                chars: [...prev.chars, ...newChars],
                offset: prev.offset,
                loading: false
            }
        }))
    }

    const chooseChar = (id) => {
        // let test =  cards.chars.filter(item => item.id === id)
        changeCards({...cards, charId: id})
   
    }

    useEffect(() => {
        getAllCharacters(cards.offset).then(res => changeCards({ ...cards, chars: res, loading: false, offset: cards.offset + 9}))
        heroes ? null : getAllCharacters(210, 100).then(res => setHeroes(prev =>{
            return [...res]
        }))
    return () =>  getAllCharacters(cards.offset).then(res => changeCards({ ...cards, chars: res, loading: false}))
    }, [])
     let resultat = (value) => {
        heroes ? null :  getAllCharacters(210, 100).then(res => setHeroes(prev =>{
            return [...res]
        }))
        let some = heroes.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
        // let some = heroes.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) !== 0)
       some.length>0?  changeCards({ ...cards, chars: some, loading: false}) : null
        


     }
    return (
        <>
        <HeroFinder findHero = {resultat}/>
             <div className="Container">
                
            <div className="Container__card">
                { cards.chars.map(item => <HeroCards isActiv = {cards.charId} choose = {chooseChar} id = {item.id} key={item.id} description = {item.description} isLoading = {cards.loading} name={item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name} url={item.thumbnail} />)}
               
            </div>
           
            <Card characterId={cards.charId} comics = {cards.chars}/>
            {/* <img className="Vision" src= {vision}/> */}
        </div>
        <Button disabled = {cards.loading ? true : false} style={{margin: '3rem 26rem', fontStyle: 'italic'}} variant="danger" onClick={ ()=>getMore(cards.offset)}>{cards.loading ? 'Loading...' : 'Load more...'}</Button>
        </>
   
    )
}