import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';

const listCat = new Set();
 plantList.forEach(extractCategory);
function extractCategory(element){
    listCat.add(element.category);
}

function AfficheSolde(article){
    if(article.estSolde && article.isBestSale ){
        return   "🔥  ... Article Soldé!" ;
    } else if (!article.estSolde && article.isBestSale ) {
        return   "🔥 Meilleure vente " ;
    } else if (article.estSolde && !article.isBestSale) {
        return   " ... Article Soldé!" ;
    } else {
        return " "
    }
}

 
export default function ShoppingList() {
    /*const plantList  = props.plantList;*/
    const listOfPlants = plantList.map(
        (plant) =>  <li key={plant.id}>{plant.name}  {AfficheSolde(plant)}</li>
        );
    console.log(listOfPlants);
    const listOfCat = Array.from(listCat);
    const lesCat = listOfCat.map(
        (cat,index) =>  <li key={`${cat}-${index} `}> {cat} </li>
        );

    return (
        <div>
           <ul>
           Catégories:{lesCat}
            </ul> 
            <ul>
           Nos Plantes: {listOfPlants}
        </ul>
        </div>
       
    )
}
