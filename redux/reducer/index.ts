export interface IStoreState {
	tempAir: number;
	consigneAir: number;
	tauxHum: number;
	consigneHum: number;
	tempSec: number;
	tempHum: number;
	co2Value: number;
	consigneCo2: number;
	days: number;
	gestionAir: string;
	gestionHum: string;
	gestionCo2: string;
	pasAir: number;
	pasHum: number;
	pasCo2: number;
	objectifAir: number;
	objectifHum: number;
	objectifCo2: number;
	etalonnageAir: number;
	etalonnageHum: number;
	etalonnageCo2: number;
	etalonnageSubstrat: number;
}

export const reducer = (state: any, action: { type: any }) => {
	switch (action.type) {
		case '': 
			
	}
}