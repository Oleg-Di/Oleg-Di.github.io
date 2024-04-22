import { Button } from "react-bootstrap"
import "./Random.scss"
import { useEffect, useState } from "react"
import { getCharacter } from "../../../Services/Services"
import logo from '../../../images/mjolnir.png'
import { Loading } from "../../Loading/Loading"

export const Random = () => {

    const [char, setChar] = useState({
        character : {
            name: null,
            description: null,
            thumbnail: null,
            homepage: null,
            wiki: null,
            
        },
        loading: true
        

    
    })
   
    const getRandomChar = async() => {
        const randomId = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        setChar({...char, loading: true})
      return await getCharacter(randomId).then(character=> setChar({character, loading: false}))
    }
    
    useEffect(() =>{
        getRandomChar()
        setInterval(() => {
            getRandomChar()
        },500000)
        return () =>  setInterval(() => {
            getRandomChar()
        },500000)
    }, [])

    const {character:{name, description, thumbnail, homepage, wiki}, loading} = char
    return (
        <div className="Random">
            <div className="Random__block">
                
                <div className="Random__block__info">
             
                <div>
                <div className="Random__block__info__img">
                    {loading? <Loading/> :<img src={thumbnail} style={{height: '11rem', width: 190}}></img> }
                    
                </div>
                </div>
                <div>
                <div className="Random__block__info__text">
                    <p>{name}</p>
                    <p>{description}</p>
                </div>
                    
                <div className="Random__block__info__button">
                        <Button   variant="warning">Home page</Button>
                        <Button variant="danger">Wiki</Button>
                </div>
                </div>
              

                </div>
                <div className="Random__search">
                    <p>Random character for today!</p>
                    <p>Do you want to know him better?</p>
                    <p style={{marginBottom: '25px'}}>Or chose another one?</p>
                    <Button onClick={getRandomChar}  variant="danger">Random</Button>
                    <img src={logo}></img>
                </div>

            </div>
        </div>
    )
}