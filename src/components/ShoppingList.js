import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import CareScale from './CareScale';
import Plantitem from './Plantitem';
import monstera from  '../assets/monstera.jpg';


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
            <div> 
        <ul>
        {listOfPlants}
        </ul>
        </div>
              
              console.log(unePlante.light);
            
       */
       const unePlante = plantList[5]; 
       const listeProps = Object.keys(unePlante);
       console.log(listeProps)
       const soleil = unePlante.light;
       const eau = unePlante.water;

       
    
            
    return (
        <>
       <Plantitem name={unePlante.name} cover={monstera}/>
       <CareScale scaleValue={String(soleil)} careType='light'/>
       <CareScale scaleValue={String(eau)} careType='water'/>
        </>
      
    )
        
       
}
