import Layout from '@components/Layout';
import React from 'react';
import styles from '@styles/Etalonnage.module.css'
import EtalonnageCard from '@components/EtalonnageCard';
import Head from 'next/head';

export default function etalonnage() {
	return (
		<Layout>
			<Head>
				<title>Champignon - Etalonnage</title>
				<meta name="description" content="Dashboard"/>
				<link rel="icon" href="/favicon.ico"/>
				<link 
					rel="preload" 
					href="/fonts/Roboto/Roboto-Regular.ttf"
					as="font"
					crossOrigin=""
				/>
			</Head>
			<div className={styles.etalonnage}>
				<EtalonnageCard/>
			</div>
		</Layout>
	)
}
