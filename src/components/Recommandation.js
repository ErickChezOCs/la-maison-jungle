export default function Recommandation() {
    const moisEnCours = new Date().getMonth;
    const cestLePrintemps = moisEnCours>=2 && moisEnCours<=5;
    if(!cestLePrintemps){
        return <div> Ne rempotez pas, c'est pas le moment!</div>
    } return <div> C'est l'heure, à vos outils,Rempotez!</div>
    
}