import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import Plantitem from './Plantitem';




 
export default function ShoppingList({cart, updateCart}) {
 
    
       
    return (
        <>
       { <div className='lmj-sales'>
            {plantList.map((plant)=>
            <li key={plant.id} className='lmj-nobullet'> 
                <Plantitem name={plant.name} cover = {plant.cover} light={plant.light} water={plant.water} />
            <button onClick={ () => updateCart(cart+1)}>Ajouter au panier</button>
            </li>) 
            }
        </div>}
  
        </>
      
    )
        
       
}
