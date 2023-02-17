import { useState } from "react";


export default function Cart({cart,updateCart}) {
    const total =cart.reduce((acc,plantType)=>acc+plantType.amount*plantType.price,0)
    //const prixMons = 8;
     
    const [isOpen,setIsOpen] = useState(false);
    

    return isOpen ? (
        <>
        <div className="lmj-cart">
        <h2>Panier</h2>
         <div>
            {cart.map(({name,price,amount},index)=> (
            <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
            </div> ))}
            
            <span>Total : {total} €</span>
            <button onClick={()=>updateCart(0)}>Vider le panier</button>
         </div>
        
        </div>
         
        </>

    ): (<button onClick={()=>setIsOpen(true) }>Voir le panier</button>)
}

/*
const prixLier = 12;
const prixBouf = 15;
{<li>lierre : {prixLier} €</li>
<li>bouquet de fleur : {prixBouf} €</li> }
+prixLier+prixBouf
<button onClick={()=>updateCart(cart+1)}>
                Ajouter  
            </button>

*/