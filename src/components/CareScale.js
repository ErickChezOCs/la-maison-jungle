/*une echelle dynamique qui affiche 1,2 ou plus symboles identiques en fonction
de deux paramètres un nombre et une chaine
si le nombre est égal à un, map bouclera trois fois mais n'affichera qu'un
symbole
}*/

 function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3,4,5,6,7]
	const scaleType = careType === 'light' ? '☀️' : '💧';
	


	return (
		<div onClick={ ()=>{
			if( scaleValue <=3 && scaleType === '💧' ) {
				return alert(" Cette plante exige assez peu d'eau");
			} else if(scaleValue >3 && scaleValue <=5 &&  scaleType === '💧'){
				return alert(" Cette plante exige beaucoup d'eau");
			} else if( scaleValue > 5 && scaleType === '💧' ) {
				return alert(" Cette plante exige énormément d'eau");
			} else if(scaleValue >3 && scaleValue <=5 &&  scaleType === '☀️'){
				return alert(" Cette plante exige beaucoup d'ensoleillement");
			}
			else if(scaleValue <=3 &&  scaleType === '☀️'){
				return alert(" Cette plante exige peu  d'ensoleillement");
			}else if(  scaleValue > 5 &&  scaleType === '☀️'){
				return alert(" Cette plante exige énormément d'ensoleillement");
			}
			alert(`voyons-voir ces nationsmalveillantes? ${scaleValue} ${scaleType}`)

		} 
	}
		
		
		>




			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString() }>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale 
