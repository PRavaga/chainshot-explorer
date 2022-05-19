import React, { useEffect, useContext } from "react";
import * as utils from "../../helpers/utils";
import { Store } from "../../store/store-reducer";
import {
  addBlockAction,
  selectBlockAction,
  updateTxDataAction,
  updateGasPriceAction,
} from "../../store/actions.js";

const Feed = () => {
  const { state, dispatch } = useContext(Store);

  const selectBlock = (block) => {
    selectBlockAction(dispatch, block);
    updateTxDataAction(dispatch, null);
  };

  useEffect(() => {
    const provider = utils.getProvider(state.chain);

    provider.on("block", async () => {
      const block = await provider.getBlock();
      if (
        state.blocks.length > 0 &&
        JSON.stringify(state.blocks[state.blocks.length - 1]) ===
          JSON.stringify(block)
      )
        return;
      const blocksArr = state.blocks;
      blocksArr.push(block);
      addBlockAction(dispatch, blocksArr);
      const gasPrice = await provider.getGasPrice();
      updateGasPriceAction(dispatch, utils.toGwei(gasPrice));
    });

    return () => provider.removeAllListeners();
  }, [state.chain]);

  return (
    <div className="flex-col max-w-md">
      <div>
        {state.blocks &&
          state.blocks
            .slice(0)
            .reverse()
            .map((block) => (
              <div
                className="p-2 rounded hover:bg-gray-200 cursor-pointer"
                key={block.hash}
                onClick={() => selectBlock(block)}
              >
                <div className="flex gap-x-6">
                  <p>
                    <span className="font-semibold">Number:</span>{" "}
                    {block.number}
                  </p>
                  <p>
                    <span className="font-semibold">Timestamp:</span>{" "}
                    {block.timestamp}
                  </p>
                </div>
                <p>
                  <span className="font-semibold">Hash:</span> {block.hash}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Feed;
