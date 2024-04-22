import vision from '../../../images/vision.png'
import Skeleton from "../../Skeleton/Skeleton"
import './Card.scss'
const Character = (id, characters) => {
let list = characters.filter(item => item.id === id)

const {thumbnail, comics, name} = list[0]
const comicList = comics.slice(0, 9)
    return (
        <div className="Card">
             <div className="Card__title">
                <img src={thumbnail} alt="img" />
                <h3 style={{ textAlign: 'center', width: '60%'}}>{name}</h3>
            </div>
            <div className="Card__list">
                {comicList.map( (item, id) => { 
                    return    (
                        
                        <div className="Card__list__item" key ={ id}>
                             <p >{item.name}</p>
                             <a target="_blank" href={item.resourceURI} >{item.resourceURI}</a>
                        </div>
                       
                    )
                
                })}
            </div>
            
        </div>
       
    )
}

export const Card = ({characterId, comics}) => {


    return (
        <div style={{width: '40%', marginTop: '15px'}}>
            {characterId? Character(characterId, comics):<Skeleton/>}
            <img className="Vision" src= {vision}/>
        </div>
    )
}

