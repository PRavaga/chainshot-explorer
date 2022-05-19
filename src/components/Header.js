import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "../store/store-reducer";
import * as utils from "../helpers/utils";
import {
  updateChainAction,
  addBlockAction,
  updateTxDataAction,
  selectBlockAction,
  updateAccountAction,
  updateGasPriceAction,
} from "../store/actions.js";

const Header = () => {
  const { state, dispatch } = useContext(Store);

  const switchChain = (chain) => {
    updateChainAction(dispatch, chain);
    updateTxDataAction(dispatch, null);
    selectBlockAction(dispatch, null);
    addBlockAction(dispatch, []);
    updateAccountAction(dispatch, null);
    updateGasPriceAction(dispatch, 0);
    utils.delay(2000);
  };

  return (
    <nav className="relative container p-8">
      <div className="flex items-center justify-between">
        <h1
          onClick={() => (window.location = "/")}
          className="font-semibold hover:cursor-pointer"
        >
          Chainshot Block Explorer
        </h1>
        <div className="flex gap-x-6">
          <Link className="font-semibold hover:text-gray-400" to="/">
            Explorer
          </Link>
          <Link className="font-semibold hover:text-gray-400" to="/address">
            Address
          </Link>
        </div>
        <p>
          <span className="font-semibold">Gas price:</span> {state.gasPrice}
        </p>
        <div className="hidden md:flex space-x-6">
          <button
            className={
              state.chain === "eth"
                ? "font-semibold hover:text-gray-400"
                : "hover:text-gray-400"
            }
            onClick={() => switchChain("eth")}
          >
            Ethereum
          </button>
          <button
            className={
              state.chain === "poly"
                ? "font-semibold hover:text-gray-400"
                : "hover:text-gray-400"
            }
            onClick={() => switchChain("poly")}
          >
            Polygon
          </button>
          <button
            className={
              state.chain === "arb"
                ? "font-semibold hover:text-gray-400"
                : "hover:text-gray-400"
            }
            onClick={() => switchChain("arb")}
          >
            Arbitrum
          </button>
          <button
            className={
              state.chain === "op"
                ? "font-semibold hover:text-gray-400"
                : "hover:text-gray-400"
            }
            onClick={() => switchChain("op")}
          >
            Optimism
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
