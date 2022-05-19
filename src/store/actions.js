export const selectBlockAction = (dispatch, block) => {
  return dispatch({
    type: "BLOCK_UPDATED",
    payload: block,
  });
};

export const addBlockAction = (dispatch, block) => {
  return dispatch({
    type: "BLOCK_ADDED",
    payload: block,
  });
};

export const updateChainAction = (dispatch, chain) => {
  return dispatch({
    type: "CHAIN_UPDATED",
    payload: chain,
  });
};

export const updateTxDataAction = (dispatch, tx) => {
  return dispatch({
    type: "TX_UPDATED",
    payload: tx,
  });
};

export const updateAccountAction = (dispatch, address) => {
  return dispatch({
    type: "ACCOUNT_UPDATED",
    payload: address,
  });
};

export const updateGasPriceAction = (dispatch, price) => {
  return dispatch({
    type: "GAS_PRICE_UPDATED",
    payload: price,
  });
};
