
import Card from 'react-bootstrap/Card';
import "./Herocards.scss"
import { Description } from './description/Description';
import { useState } from 'react';


export const HeroCards = ({name, url, isLoading, id, choose, isActiv, description}) => {
    const [enter, setEnter] = useState(false)
const activity = isActiv === id ?  {boxShadow: '1px 1px 5px 10px green',  top: '5px',
left: '5px'} : null
const timing = () => {
 setTimeout(() => {
    setEnter(true)
    clearTimeout(timing)
 }, 3000)

}
const clearTiming = () => {
    clearTimeout(timing)
    setEnter(false)
 }
  
    return (
        <div >
            <Card onMouseLeave={() => setEnter(false)} onMouseEnter={() => setEnter(true)}   onClick={() =>choose(id)} className='Cards' style={{ width: '18rem', ...activity }}>
                <Card.Img className='Cards__img' variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
       
                </Card.Body>
                <Description descr={description} entered={enter}/>
            </Card>
        
        </div>
    )
}