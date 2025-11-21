// blockchain.js
// Web3 + Blockchain Module for Hind Browser

const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || "https://mainnet.infura.io/v3/YOUR_INFURA_KEY");

module.exports = {
  getBalance: async (address) => {
    try {
      const balance = await web3.eth.getBalance(address);
      return { address, balance: web3.utils.fromWei(balance, 'ether') };
    } catch (error) {
      return { error: error.message };
    }
  },

  sendTransaction: async (tx) => {
    try {
      const receipt = await web3.eth.sendTransaction(tx);
      return receipt;
    } catch (error) {
      return { error: error.message };
    }
  },

  callContract: async (contractAddress, abi, methodName, args = []) => {
    try {
      const contract = new web3.eth.Contract(abi, contractAddress);
      const result = await contract.methods[methodName](...args).call();
      return result;
    } catch (error) {
      return { error: error.message };
    }
  },
};
