import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import CareScale from './CareScale';
import Plantitem from './Plantitem';



const listCat = new Set();
 plantList.forEach(extractCategory);
function extractCategory(element){
    listCat.add(element.category);
}

function AfficheSolde(article){
    if(article.estSolde && article.isBestSale ){
        return   "🔥 "   ;
    } else if (!article.estSolde && article.isBestSale ) {
        return   "🔥 Meilleure vente " ;
    } else if (article.estSolde && !article.isBestSale) {
        return   " " ;
    } else {
        return " ";
    }
}

 
export default function ShoppingList() {
  /* const plantList  = props.plantList;*/
    const listOfPlants = plantList.map(
        (plant) =>  <li key={plant.id}> {plant.name} 
                                     {AfficheSolde(plant)}
                                     {plant.estSolde && <span className='lmj-sales'>Soldé</span>}
                                     {plant.light} {plant.water}
                                     

        
        </li>
        );
        
   /*  console.log(listOfPlants);
    const listOfCat = Array.from(listCat);
    const lesCat = listOfCat.map(
        (cat,index) =>  <li key={`${cat}-${index} `}> {cat} </li>
        );
          Catégories:{lesCat}
           Nos Plantes: {listOfPlants}
       */
       const unePlante = plantList[0]; 
            
    return (
        <div>
            <CareScale scaleValue={unePlante.light}/>
        <ul>
        {listOfPlants[1]}
        </ul>
        </div>
    )
        
       
}
