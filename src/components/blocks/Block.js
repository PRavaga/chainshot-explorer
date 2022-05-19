import React, { useState, useContext } from "react";
import * as utils from "../../helpers/utils";
import { Store } from "../../store/store-reducer";
import { updateTxDataAction } from "../../store/actions.js";

const Block = () => {
  const { state, dispatch } = useContext(Store);
  const [txList, setTxList] = useState(false);

  const selectTx = async (txHash) => {
    const provider = utils.getProvider(state.chain);
    const tx = await provider.getTransaction(txHash);
    updateTxDataAction(dispatch, tx);
  };

  return state.block ? (
    <div className="flex-col max-w-md">
      <div className="flex gap-x-6">
        <p>
          <span className="font-semibold">Number:</span> {state.block.number}
        </p>
        <p>
          <span className="font-semibold">Timestamp:</span>{" "}
          {state.block.timestamp}
        </p>
      </div>
      <p>
        <span className="font-semibold">Hash:</span> {state.block.hash}
      </p>
      <p>
        <span className="font-semibold">Nonce:</span> {state.block.nonce}
      </p>
      <p>
        <span className="font-semibold">Miner:</span> {state.block.miner}
      </p>
      <p>
        <span className="font-semibold">Transactions:</span>{" "}
        {state.block.transactions.length}
      </p>
      <p
        className="hover:text-gray-400 cursor-pointer"
        onClick={() => (txList ? setTxList(false) : setTxList(true))}
      >
        <span className="font-semibold">Show/Hide tx list:</span>
      </p>
      {txList && (
        <ul>
          {state.block.transactions.map((tx) => (
            <li
              className="hover:text-gray-400 cursor-pointer"
              key={tx}
              onClick={() => selectTx(tx)}
            >
              {tx}
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : (
    <>Select the block to view details</>
  );
};

export default Block;
