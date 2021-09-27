import React, { useState } from 'react';
import styles from '@styles/EtalonnageCard.module.css'
import { remove } from 'lodash';

export default function EtalonnageCard() {
	const [etalAir, setEtalAir] = useState(1);
	const [etalSec, setEtalSec] = useState(0.3);
	const [etalHum, setEtalHum] = useState(0.5);
	const [etalSubstrat, setEtalSubstrat] = useState(0.6);

	return (
		<div className={styles.card_box}>
			<div className={styles.card_title}>Etalonnage</div>
			<div className={styles.value_column}>Value</div>
			<div className={styles.etalonnage_column}>Etalonnage</div>
			<div className={styles.temp_air_group}>
				<div className={styles.temp_air}>Sonde Temperature Air</div>
				<div className={styles.temp_air_value}>17 °C</div>
				<button 
					className={styles.less}
					onClick={
						() => setEtalAir(parseFloat((etalAir-0.1).toFixed(2)))
					}
				>-</button>
				<div className={styles.temp_air_etal}>{etalAir}</div>
				<button 
					className={styles.add}
					onClick={
						() => setEtalAir(parseFloat((etalAir+0.1).toFixed(2)))
					}
				>+</button>
			</div>
			<div className={styles.temp_sec_group}>
				<div className={styles.temp_sec}>Sonde Temperature Sec</div>
				<div className={styles.temp_sec_value}>20.2 °C</div>
				<button 
					className={styles.less} 
					onClick={
						() => setEtalSec(parseFloat((etalSec-0.1).toFixed(2)))
					}
				>-</button>
				<div className={styles.temp_sec_etal}>{etalSec}</div>
				<button 
					className={styles.add} 
					onClick={
						() => setEtalSec(parseFloat((etalSec+0.1).toFixed(2)))
					}
				>+</button>
			</div>
			<div className={styles.temp_hum_group}>
				<div className={styles.temp_hum}>Sonde Temperature Hum</div>
				<div className={styles.temp_hum_value}>20.6 °C</div>
				<button 
					className={styles.less} 
					onClick={
						() => setEtalHum(parseFloat((etalHum-0.1).toFixed(2)))
					}
				>-</button>
				<div className={styles.temp_hum_etal}>{etalHum}</div>
				<button 
					className={styles.add} 
					onClick={
						() => setEtalHum(parseFloat((etalHum+0.1).toFixed(2)))
					}
				>+</button>
			</div>
			<div className={styles.substrat_group}>
				<div className={styles.substrat}>Sonde Substrat</div>
				<div className={styles.substrat_value}>32 °C</div>
				<button 
					className={styles.less} 
					onClick={
						() => setEtalSubstrat(parseFloat((etalSubstrat-0.1).toFixed(2)))
					}
				>-</button>
				<div className={styles.substrat_etal}>{etalSubstrat}</div>
				<button
					className={styles.add} 
					onClick={
						() => setEtalSubstrat(parseFloat((etalSubstrat+0.1).toFixed(2)))
					}
				>+</button>
			</div>
		</div>
	)
}
