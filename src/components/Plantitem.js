import '../styles/PlantItem.css';
import CareScale from './CareScale';


export default function Plantitem(props) {
    const {id,name,cover,light,water}= props;
    


    /*utilisation de name et cover
    
    */
    return (
        <>
            <div>
            <img className="lmj-plant-item-cover"  src={cover} />
            <p className="lmj-plant-item">{name}</p>
           </div>
           <CareScale scaleValue={light} careType='light'/>
           <CareScale scaleValue={water} careType='water'/>
           
        </>
    )

           
}