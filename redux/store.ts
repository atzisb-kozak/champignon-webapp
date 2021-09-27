import { useMemo } from 'react';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IStoreState, reducer } from './reducer';
import thunkMiddleware from 'redux-thunk'

let store: Store<IStoreState, any> | undefined;

const initialState: IStoreState = {
	tempAir: 0,
	consigneAir: 0,
	tauxHum: 0,
	consigneHum: 0,
	tempSec: 0,
	tempHum: 0,
	co2Value: 0,
	consigneCo2: 0,
	days: 0,
	gestionAir: '',
	gestionHum: '',
	gestionCo2: '',
	pasAir: 0,
	pasHum: 0,
	pasCo2: 0,
	objectifAir: 0,
	objectifHum: 0,
	objectifCo2: 0,
	etalonnageAir: 0,
	etalonnageHum: 0,
	etalonnageCo2: 0,
	etalonnageSubstrat: 0
}

function initStore(preloadedState = initialState) {
	return createStore(
		reducer,
		preloadedState,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
	)
}

export const initializeStore = (preloadedState: IStoreState | undefined) => {
	let _store = store ?? initStore(preloadedState)

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (preloadedState && store) {
		_store = initStore({
			...store.getState(),
			...preloadedState,
		})
		// Reset the current store
		store = undefined
	}

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store
	// Create the store once in the client
	if (!store) store = _store

	return _store
}


export function useStore(initialState: any) {
	const store = useMemo(() => initializeStore(initialState), [initialState])
	return store
}

export default store;