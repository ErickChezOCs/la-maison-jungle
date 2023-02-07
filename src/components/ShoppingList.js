import { plantList } from '../datas/plantList';

const listCat = new Set();
 plantList.forEach(extractCategory);
function extractCategory(element){
    listCat.add(element.category);
}

export default function ShoppingList(props) {
    const plantList  = props.plantList;
    const listOfPlants = plantList.map(
        (plant) =>  <li key={plant.id}>{plant.name} {plant.isBestSale && <span>🔥</span>}</li>
        );
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
