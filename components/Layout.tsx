import React, { ReactNode }from 'react';
import styles from '@styles/Layout.module.css';
import Link from 'next/link';

interface ILayoutProps {
	children: ReactNode
}

export default function Layout(props: ILayoutProps) {
	return (
		<div>
			<div className={styles.menu}>
				<div className={styles.menu_container}>
					<Link href="/" passHref={true}>
						<div className={styles.home_bloc}>
							<div className={styles.home_form}>
								<div className={styles.home_text}>Acceuil</div>
							</div>
						</div>
					</Link>
					<Link href="/parametre" passHref={true}>
						<div className={styles.parameter_bloc}>
							<div className={styles.parameter_form}>
								<div className={styles.parameter_text}>Parametre</div>
							</div>
						</div>
					</Link>
					<Link href="/relai" passHref={true}>
						<div className={styles.relay_bloc}>
							<div className={styles.relay_form}>
								<div className={styles.relay_text}>Gestion Relay</div>
							</div>
						</div>
					</Link>
					<Link href="/etalonnage" passHref={true}>
						<div className={styles.etalonnage_bloc}>
							<div className={styles.etalonnage_form}>
								<div className={styles.etalonnage_text}>Etalonnage</div>
							</div>
						</div>
					</Link>
					<div className={styles.courbe_bloc}>
						<div className={styles.courbe_form}>
							<div className={styles.courbe_text}>Courbe</div>
						</div>
					</div>
					<div className={styles.log_bloc}>
						<div className={styles.log_form}>
							<div className={styles.log_text}>Log</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.app_container}>
				{props.children}
			</div>
		</div>
	)
}

