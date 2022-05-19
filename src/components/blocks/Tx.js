import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as utils from "../../helpers/utils";
import { Store } from "../../store/store-reducer";

const Tx = () => {
  const { state } = useContext(Store);

  return (
    <div className="flex-col max-w-md">
      {state.tx && (
        <div>
          <p>
            <span className="font-semibold">Transaction Hash:</span>{" "}
            {state.tx.hash}
          </p>
          <Link
            className="block hover:text-gray-400"
            to={`address/${state.tx.from}`}
          >
            <span className="font-semibold">From:</span> {state.tx.from}
          </Link>
          <Link
            className="block hover:text-gray-400"
            to={`address/${state.tx.to}`}
          >
            <span className="font-semibold">To:</span> {state.tx.to}
          </Link>
          <p>
            <span className="font-semibold">Nonce:</span> {state.tx.nonce}
          </p>
          <p>
            <span className="font-semibold">Value:</span>{" "}
            {utils.fromWei(state.tx.nonce)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Tx;
