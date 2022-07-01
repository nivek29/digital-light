import React, { useState, useEffect} from 'react'
import { getState } from '../store/index'

export  const Context = React.createContext(null);

export const injectContext = (PassedComponent) => {
    const StoreWrapper = props =>  {
        const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);
        useEffect( () =>{
            

        },[]);
        return(
            <Context.Provider value = {state}>
                <PassedComponent {...props}></PassedComponent>
            </Context.Provider>
        );
    };
    return StoreWrapper;
};
