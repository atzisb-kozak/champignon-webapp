import React from 'react';
import styles from '@styles/InfoState.module.css'


export default function InfoState() {
	return (
		<div className={styles.card_box}>
			<div className={styles.card_container}>
				<div className={styles.card_title}>Information Etat</div>
				<div className={styles.days_group}>
					<div className={styles.days}>Nombre de jours</div>
					<div className={styles.days_value}>25</div>
				</div>
				<div className={styles.gestion_air_group}>
					<div className={styles.gestion_air}>Gestion Air</div>
					<div className={styles.gestion_air_value}>Procedure Air</div>
				</div>
				<div className={styles.gestion_hum_group}>
					<div className={styles.gestion_hum}>Gestion Hum</div>
					<div className={styles.gestion_hum_value}>Procedure Hum</div>
				</div>
				<div className={styles.gestion_co2_group}>
					<div className={styles.gestion_co2}>Gestion Co2</div>
					<div className={styles.gestion_co2_value}>Procedure Co2</div>
				</div>
			</div>
		</div>
	)
}
