import React from 'react';
import styles from '@styles/RelaiFroidEau.module.css'

export default function RelaiFroidEau() {
	return (
		<div className={styles.card_box}>
			<div className={styles.water_floor}>Eaux aux sols</div>
			<button className={styles.water_floor_button}>Activation</button>
			<div className={styles.hum_fan}>Ventilateur humidité</div>
			<button className={styles.hum_fan_button}>Activation</button>
			<div className={styles.vanne_state}>Vanne Froid Etat : </div>
			<div className={styles.vanne_state_value}>15</div>
			<div className={styles.time5s}>Temps 5s</div>
			<button className={styles.vanne_open5}>Activation</button>
			<button className={styles.vanne_close5}>Fermeture</button>
			<div className={styles.time40s}>Temps 40s</div>
			<button className={styles.vanne_open40}>Activation</button>
			<button className={styles.vanne_close40}>Fermeture</button>
		</div>
	)
}
