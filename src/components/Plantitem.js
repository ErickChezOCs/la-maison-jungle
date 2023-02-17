import '../styles/PlantItem.css';
import CareScale from './CareScale';


export default function Plantitem(props) {
    const {id,name,cover,light,water}= props;
     
    
    return (
        <>
        <div>
            <div>
            <img className="lmj-plant-item-cover"   alt='Une très belle plante' src={cover} />
            <p className="lmj-plant-item" >{name}</p>
           </div>

           <div >
           <CareScale scaleValue={light} careType='light'  />
           </div> 
           <div>
           <CareScale scaleValue={water} careType='water'/>
           </div>
           
           
           </div>
        </>
    )

           
}
 