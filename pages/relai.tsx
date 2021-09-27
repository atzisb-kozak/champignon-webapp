import Layout from '@components/Layout';
import RelaiFroidEau from '@components/RelaiFroidEau';
import React from 'react';
import styles from '@styles/Relai.module.css'
import Co2Card from '@components/Co2Card';
import Head from 'next/head';

export default function Relai() {
	return (
		<Layout>
			<Head>
				<title>Champignon - Gestion Relai</title>
				<meta name="description" content="Dashboard"/>
				<link rel="icon" href="/favicon.ico"/>
				<link 
					rel="preload" 
					href="/fonts/Roboto/Roboto-Regular.ttf"
					as="font"
					crossOrigin=""
				/>
			</Head>
			<div className={styles.relai_froid}>
				<RelaiFroidEau/>
			</div>
			<div className={styles.relai_co2}>
				<Co2Card/>
			</div>
		</Layout>
	)
}
