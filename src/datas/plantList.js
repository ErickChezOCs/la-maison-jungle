import monstera from  '../assets/monstera.jpg';
import aloe from '../assets/aloe.png';
import basilic from '../assets/basilic.png';
import ficus_lyrata from '../assets/ficus_lyrata.png';
import geranium from '../assets/geranium.png';
import olivier from '../assets/olivier.png';
import pothos_argente from '../assets/pothos_argenté.png';
import succulente from '../assets/succulente.png';
import yucca from '../assets/yucca.png';


export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		isBestSale: true,
		estSolde :true,
		water: 1,
		light: 4,
		cover:monstera,
		price:15
		
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		isBestSale: true,
		estSolde :false,
		water: 5,
		light: 1,
		cover: ficus_lyrata,
		price:20
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		isBestSale: false,
		estSolde :false,
		water: 6,
		light: 3,
		cover: pothos_argente,
		price:10
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
		isBestSale: false,
		estSolde :true,
		water: 7,
		light: 2,
		cover:yucca,
		price:15

	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		isBestSale: true,
		estSolde : false,
		water: 2,
		light: 5,
		cover: olivier,
		price:25
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		isBestSale: false,
		estSolde : false,
		water: 1,
		light: 1,
		cover: geranium,
		price:10

	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		isBestSale: true,
		estSolde :true,
		water: 7,
		light: 5,
		cover: basilic,
		price:20
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		isBestSale: false,
		estSolde : false,
		water: 2,
		light: 1,
		cover: aloe,
		price:25
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		isBestSale: false,
		estSolde : false,
		water: 7,
		light: 4,
		cover: succulente,
		price:30
	}
]
