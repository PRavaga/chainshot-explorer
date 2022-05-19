import React from "react";
import Feed from "./blocks/Feed";
import Block from "./blocks/Block";
import Tx from "./blocks/Tx";

const Explorer = () => {
  return (
    <div className="flex mx-6 gap-x-6 break-words">
      <Feed />
      <Block />
      <Tx />
    </div>
  );
};

export default Explorer;
