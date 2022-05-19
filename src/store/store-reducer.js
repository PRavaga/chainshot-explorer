import React, { createContext, useReducer } from "react";

const initialState = {
  chain: "eth",
  block: null,
  tx: null,
  address: null,
  gasPrice: 0,
  blocks: [],
};

export const Store = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "BLOCK_UPDATED":
      return { ...state, block: action.payload };
    case "CHAIN_UPDATED":
      return { ...state, chain: action.payload };
    case "BLOCK_ADDED":
      return { ...state, blocks: action.payload };
    case "TX_UPDATED":
      return { ...state, tx: action.payload };
    case "ACCOUNT_UPDATED":
      return { ...state, address: action.payload };
    case "GAS_PRICE_UPDATED":
      return { ...state, gasPrice: action.payload };
    default:
      return { state };
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
