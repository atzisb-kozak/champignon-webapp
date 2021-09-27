import React, { useState, } from 'react';
import Pen from '@svg/pen.svg'
import styles from '@styles/ParameterCard.module.css'

interface IParameterCardProps {
	title: string;
	mesure: string;
}

export default function ParameterCard(props: IParameterCardProps) {
	const [consigne, setConsigne] = useState(17.3);
	const [pas, setPas] = useState(0.25);
	const [goal, setGoal] = useState(20);
	const [consigneEdit, setConsigneEdit] = useState(0);
	const [pasEdit, setPasEdit] = useState(0);
	const [goalEdit, setGoalEdit] = useState(0);
	const [editMode, setEditMode] = useState(false);
	let component: JSX.Element;

	const validation = (event: any) => {
		setConsigne(consigneEdit !== 0 ? consigneEdit : consigne);
		setPas(pasEdit !== 0 ? pasEdit : pas);
		setGoal(goalEdit !== 0 ? goalEdit : goal);
		setEditMode(false);
		event.preventDefault();
	}

	component = !editMode ? 
	(
		<div className={styles.card_box}>
			<Pen className={styles.crayon} onClick={() => setEditMode(true)}/>
			<div className={styles.card_title}>{props.title}</div>
			<div className={styles.consigne_group}>
				<div className={styles.consigne}>Consigne</div>
				<div className={styles.consigne_value}>{`${consigne} ${props.mesure}`}</div>
			</div>
			<div className={styles.pas_group}>
				<div className={styles.pas}>Pas</div>
				<div className={styles.pas_value}>{pas}</div>
			</div>
			<div className={styles.goal_group}>
				<div className={styles.goal}>Objectif</div>
				<div className={styles.goal_value}>{`${goal} ${props.mesure}`}</div>
			</div>
			<div className={styles.time_group}>
				<div className={styles.time}>Temps</div>
				<div className={styles.time_value}>2 jours 14 heures</div>
			</div>
		</div>
	)
	:
	(
		<div className={styles.card_box}>
			<div className={styles.card_title}>{props.title}</div>
			<form className={styles.form} onSubmit={validation}>
				<div className={styles.consigne_group}>
					<label className={styles.consigne}>
						Consigne
						<input 
							type="text"
							className={styles.consigne_value}
							onChange={(event: any) => setConsigneEdit(event.target.value)}
							placeholder={consigne.toString()}/>
					</label>

				</div>
				<div className={styles.pas_group}>
					<label className={styles.pas}>
						Pas
						<input
							type="text"
							className={styles.pas_value}
							onChange={(event: any) => setPasEdit(event.target.value)}
							placeholder={pas.toString()}/>
					</label>
				</div>
				<div className={styles.goal_group}>
					<label className={styles.goal}>
						Objectif
						<input 
							type="text"
							onChange={(event: any) => setGoalEdit(event.target.value)}
							className={styles.goal_value}
							placeholder={goal.toString()}/>
					</label>
				</div>
				<input type="submit" className={styles.validation} value="Confirmer"/>
				<button className={styles.cancel} onClick={() => setEditMode(false)}>Annuler</button> 
			</form>
		</div>
	)

	return component;
}
