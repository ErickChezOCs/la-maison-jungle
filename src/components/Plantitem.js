import '../styles/PlantItem.css';
import CareScale from './CareScale';


export default function Plantitem(props) {
    const {name,cover,id,light,water}= props;
    


    /*utilisation de name et cover
    <CareScale scaleValue={String(soleil)} careType='' />
    */
    return <div>
            <img className="lmj-plant-item-cover"  src={cover} />
            <p className="lmj-plant-item">{name}</p>
           
           </div>
}