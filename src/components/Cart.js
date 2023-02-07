
export default function Cart() {
    const prixMons = 8;
    const prixLier = 12;
    const prixBouf = 15;

    return (
        <>
        <div className="lmj-cart">
        <h2>Panier</h2>
         <ul>
            <li>monstera : {prixMons} €</li>
            <li>lierre : {prixLier} €</li>
            <li>bouquet de fleur : {prixBouf} €</li>
         </ul>
         <span>Total : {prixMons+prixLier+prixBouf} €</span>
        </div>
         
        </>
       

    )
}