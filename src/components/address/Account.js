import React, { useState, useEffect, useContext } from "react";
import * as utils from "../../helpers/utils";
import { Store } from "../../store/store-reducer";
import { updateAccountAction } from "../../store/actions.js";

const Account = () => {
  const { dispatch } = useContext(Store);

  const [address, setAddress] = useState(
    window.location.pathname.length > 50
      ? window.location.pathname.slice(-42)
      : ""
  );

  useEffect(() => {
    utils.validateAddress(address)
      ? updateAccountAction(dispatch, address)
      : console.log("invalid address");
  }, [address]);

  return (
    <div className="p-2 grow max-w-md rounded bg-gray-200">
      <p>Enter address to lookup</p>
      <input
        className="w-full rounded p-1"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
  );
};

export default Account;
