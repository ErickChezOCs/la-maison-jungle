import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import Plantitem from './Plantitem';




 
export default function ShoppingList() {
 
    
       
    return (
        <>
       { <div className='lmj-sales'>
            {plantList.map((plant)=>
            <li key={plant.id} className='lmj-nobullet'> 
                <Plantitem name={plant.name} cover = {plant.cover} light={plant.light} water={plant.water} />
            </li>) 
            }
        </div>}
  
        </>
      
    )
        
       
}
