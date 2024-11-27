import {useEffect,useContext,useReducer,createContext} from 'react';
import {reducer} from './reducer'
import {url} from './data'
import getTotals from './utils';
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';
const AppContext=createContext();
const initialValues={
   loading:false,
   cart:new Map()
}

export const AppProvider=({children})=>{
    const increase=(id)=>{
      dispatch({type:INCREASE,id});
    }
    const decrease=(id)=>{
      dispatch({type:DECREASE,id});
    }
    const remove=(id)=>{
      dispatch({type:REMOVE,id});
    }
    const clearCart=()=>{
      dispatch({type:CLEAR_CART});
    }
    const fetchData=async ()=>{
      dispatch({ type: LOADING });
      const response=await fetch(url);
      const cart=await response.json();
      dispatch({ type: DISPLAY_ITEMS, cart:cart});
    }
    useEffect(()=>{
      fetchData();
    },[])
    const [state,dispatch]=useReducer(reducer,initialValues);
    const {totalAmount,totalCost}=getTotals(state.cart);
    return <AppContext.Provider value={{...state,increase,decrease,remove,clearCart,totalAmount,totalCost}}>
                  {children}
    </AppContext.Provider>
};
export const useGlobalContext=()=>{
  return useContext(AppContext);
}