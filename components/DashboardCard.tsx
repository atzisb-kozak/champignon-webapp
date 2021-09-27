import React from 'react';
import styles from '@styles/DashboardCard.module.css'

export interface IDashboardCardProps {
	title: string;
	mesure: string;
	value: number;
	consigne: number;
	tempSec?: number;
	tempHum?: number;
}

export function DashboardCard(props: IDashboardCardProps) {

	const tempSec = props.tempSec ? 
		<div className={styles.temp_sec_group}>
			<div className={styles.temp_sec}>Temp Sec</div>
			<div className={styles.temp_sec_value}>{props.tempSec} °C</div> 
		</div>
		: null;
	const tempHum = props.tempHum ? 
		<div className={styles.temp_hum_group}>
			<div className={styles.temp_hum}>Temp Hum</div>
			<div className={styles.temp_hum_value}>{props.tempHum} °C</div> 
		</div>
		: null;

	return (
		<div className={styles.card_box}>
			<div className={styles.card_title}>{props.title}</div>
			<div className={styles.value}>{`${props.value} ${props.mesure}`}</div>
			<div className={styles.consigne_group}>
				<div className={styles.consigne}>Consigne</div>
				<div className={styles.consigne_value}>{`${props.consigne} ${props.mesure}`}</div>
			</div>
			<div className={styles.delta_group}>
				<div className={styles.delta}>Delta</div>
				<div className={styles.delta_value}>
				{Math.abs(props.consigne - props.value).toFixed(1)}</div>
			</div>
			{tempSec}
			{tempHum}
		</div>
	)
}
