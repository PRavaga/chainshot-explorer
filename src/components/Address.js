import React from "react";
import Account from "../components/address/Account";
import Details from "../components/address/Details";

const Address = () => {
  return (
    <div className="flex mx-6 gap-x-6 break-words">
      <Account />
      <Details />
    </div>
  );
};

export default Address;
