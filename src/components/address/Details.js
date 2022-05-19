import React, { useContext, useEffect, useState } from "react";
import * as utils from "../../helpers/utils";
import { Store } from "../../store/store-reducer";

const Details = () => {
  const { state } = useContext(Store);
  const [balance, setBalance] = useState(null);
  const [hasCode, setHasCode] = useState(null);

  useEffect(() => {
    if (state.address) {
      const fetchDetails = async () => {
        const provider = utils.getProvider(state.chain);
        const balance = await provider.getBalance(state.address);
        const hasCode = await provider.getCode(state.address);
        setBalance(utils.fromWei(balance));
        setHasCode(hasCode);
      };
      fetchDetails();
    }
  }, [state.address]);

  return (
    <div className="flex-col max-w-md">
      {state.address ? (
        <>
          <p>
            <span className="font-semibold">Address:</span> {state.address}
          </p>
          <p>
            <span className="font-semibold">Balance:</span> {balance}
          </p>
          {hasCode && (
            <p>
              <span className="font-semibold">Account type:</span>{" "}
              {hasCode === "0x" ? `EOA` : `Smart contract`}
            </p>
          )}
        </>
      ) : (
        <p>Enter valid address to see the details</p>
      )}
    </div>
  );
};

export default Details;
