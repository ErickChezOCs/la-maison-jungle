import '../styles/PlantItem.css';
import CareScale from './CareScale';


export default function Plantitem(props) {
    const {id,name,cover,light,water}= props;
    
    return (
        <>
            <div>
            <img className="lmj-plant-item-cover"   alt='Une très belle plante' src={cover} />
            <p className="lmj-plant-item">{name}</p>
           </div>
           <CareScale scaleValue={light} careType='light'/>
           <CareScale scaleValue={water} careType='water'/>
           
        </>
    )

           
}
export function handleClick(event ) {
    console.log(`😇 ceci est un event  😇 : }`,event); 
}
handleClick()