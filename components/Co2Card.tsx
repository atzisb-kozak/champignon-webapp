import React from 'react';
import styles from '@styles/Co2Card.module.css'

export default function Co2Card() {
	return (
		<div className={styles.card_box}>
			<div className={styles.card_title}>CO2</div>
			<div className={styles.variateur_group}>
				<div className={styles.variateur}>Valeur Variateur</div>
				<div className={styles.variateur_value}>25 Hz</div>
			</div>
			<div className={styles.new_variateur_group}>
				<div className={styles.new_variateur}>Nouvelle Valeur</div>
				<div className={styles.new_variateur_value}>36 Hz</div>
			</div>
		</div>
	)
}
