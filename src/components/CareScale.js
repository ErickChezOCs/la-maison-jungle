/*une echelle dynamique qui affiche 1,2 ou 3 symboles identiques en fonction
de deux paramètres un nombre et une chaine
si le nombre est égal à un, map bouclera trois fois mais n'affichera qu'un
symbole
}*/

 function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3,4,5,6,7]
	const scaleType = careType === 'light' ? '☀️' : '💧';

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale 
