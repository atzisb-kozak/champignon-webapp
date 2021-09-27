import React from 'react';
import { IDashboardCardProps, DashboardCard } from '@components/DashboardCard';
import Layout from '@components/Layout';
import styles from '@styles/Home.module.css'
import InfoState from '@components/InfoState';
import Head from 'next/head';

let datas : IDashboardCardProps[] = [{
	title: 'Temperature Air',
	mesure: '°C',
	consigne: 20,
	value: 17.3,
},
{
	title: 'Taux Hum',
	mesure: '%',
	consigne: 98,
	value: 94,
	tempSec: 17.3,
	tempHum: 17.5
},
{
	title: 'CO2',
	mesure: 'ppm',
	consigne: 1500,
	value: 2500,
}]

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Champignon - Dashboard</title>
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
				{datas.map((data, index) => 
					<DashboardCard
						key = {index}
						title = {data.title}
						mesure = {data.mesure}
						consigne = {data.consigne}
						value = {data.value}
						tempHum = {data.tempHum}
						tempSec = {data.tempSec}
					/>
				)}
			</div>
			<InfoState></InfoState>
		</Layout>
	)
}
