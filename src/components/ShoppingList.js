import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import CareScale from './CareScale';
import Plantitem from './Plantitem';
import monstera from  '../assets/monstera.jpg';
import aloe from '../assets/aloe.png';
import basilic from '../assets/basilic.png';
import ficus_lyrata from '../assets/ficus_lyrata.png';
import geranium from '../assets/geranium.png';
import olivier from '../assets/olivier.png';
import pothos_argente from '../assets/pothos_argenté.png';
import succulente from '../assets/succulente.png';
import yucca from '../assets/yucca.png';

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
          
            <div> 
        <ul>
        {listOfPlants}
        </ul>
        </div>
              
              console.log(unePlante.light);
              Nos Plantes: {listOfPlants}
            
       */
     const listOfCat = Array.from(listCat);
     const lesCat = listOfCat.map(
    (cat,index) =>  <span key={`${cat}-${index} `}>-- {cat} </span>
                  );
       const unePlante = plantList[1]; 
       const listeProps = Object.keys(unePlante);
       console.log(listeProps)
       const soleil = unePlante.light;
       const eau = unePlante.water;
       const image = unePlante.cover

       
    
            
    return (
        <>
        <div>
          <div>
          Catégories:{lesCat}
          </div>
           
           
           
           
        </div>
       <Plantitem name={unePlante.name} cover={ficus_lyrata}>
       <CareScale scaleValue={String(soleil)} careType='light'/>
       <CareScale scaleValue={String(eau)} careType='water'/>
        </Plantitem>
       
        </>
      
    )
        
       
}
