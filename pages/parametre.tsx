import React from 'react';
import styles from '@styles/Parameter.module.css';
import ParameterCard from '@components/ParameterCard';
import Layout from '@components/Layout';
import Head from 'next/head';

export default function Parametre() {
	return (
		<Layout>
			<Head>
				<title>Champignon - Parametrage</title>
				<meta name="description" content="Dashboard"/>
				<link rel="icon" href="/favicon.ico"/>
				<link 
					rel="preload"
					href="/fonts/Roboto/Roboto-Regular.ttf"
					as="font"
					crossOrigin=""
				/>
			</Head>
			<div className={styles.card_grid}>
				<ParameterCard
					title='Descente Air'
					mesure='°C'
				/>
				<ParameterCard
					title='Descente Hum'
					mesure='%'
				/>
				<ParameterCard
					title='Descente CO2'
					mesure='ppm'
				/>
			</div>
		</Layout>
	)
}
