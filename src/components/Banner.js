import Cart from "./Cart";
import '../styles/Banner.css';
import logo from '../assets/logo.png';
import ShoppingList from './ShoppingList';
import Recommandation from './Recommandation';
import { useState } from "react";





export default function Banner() {
   const [cart,updateCart] = useState([]);
   
    return (
        <>
         <div className="lmj-banner" >
            <div className="lmj-titre" >
            <img src={logo} alt="La maison jungle" className='lmj-logo' />
         <h1 className="lmj-title" >La maison jungle</h1>
            </div>
         <div>
      <Recommandation/>
         </div>
      </div>   
      <Cart cart={cart} updateCart={updateCart}/> 
      <div>
      <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
  
    
      
        </>  

    )
}

  /* */