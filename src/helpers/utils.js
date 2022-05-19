import { ethers, utils } from "ethers";

export const getProvider = (chain) => {
  let url;

  switch (chain) {
    case "poly":
      url = process.env.REACT_APP_ALCHEMY_URL_POLY;
      break;
    case "arb":
      url = process.env.REACT_APP_ALCHEMY_URL_ARB;
      break;
    case "op":
      url = process.env.REACT_APP_ALCHEMY_URL_OP;
      break;
    default:
      url = process.env.REACT_APP_ALCHEMY_URL_ETH;
  }

  return new ethers.providers.JsonRpcProvider(url);
};

export const fromWei = (bn) => utils.formatEther(bn);

export const toGwei = (bn) => utils.formatUnits(bn, "gwei");

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const reloadApp = () => {
  window.location.reload();
};

export const validateAddress = (address) => {
  return address.startsWith("0x") && address.length >= 42;
};
