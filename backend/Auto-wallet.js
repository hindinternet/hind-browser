
// auto-wallet.js
// HIND Browser Auto Wallet + Web3 Integration
// Zero-step user experience, all in background

const crypto = require("crypto");
const ethers = require("ethers");

// In-memory user wallets (for demo, replace with secure DB for production)
const userWallets = {};

module.exports = {

  // Create a wallet silently for a user
  createWallet: (userId) => {
    if(userWallets[userId]) return userWallets[userId];

    const wallet = ethers.Wallet.createRandom(); // random private key
    userWallets[userId] = wallet;
    console.log(`[AutoWallet] Wallet created silently for user ${userId}`);
    return wallet;
  },

  // Get existing wallet
  getWallet: (userId) => {
    return userWallets[userId] || module.exports.createWallet(userId);
  },

  // Send a transaction silently
  sendTransaction: async (userId, tx) => {
    const wallet = module.exports.getWallet(userId);

    // Example: using provider (default: etherscan/infura)
    const provider = ethers.getDefaultProvider(); 
    const walletConnected = wallet.connect(provider);

    try {
      const transaction = await walletConnected.sendTransaction(tx);
      console.log(`[AutoWallet] Transaction sent for user ${userId}:`, transaction.hash);
      return { success: true, hash: transaction.hash };
    } catch (err) {
      console.error(`[AutoWallet] Transaction error for user ${userId}:`, err.message);
      return { success: false, error: err.message };
    }
  },

  // Silent balance check
  getBalance: async (userId) => {
    const wallet = module.exports.getWallet(userId);
    const provider = ethers.getDefaultProvider();
    const balance = await provider.getBalance(wallet.address);
    return { address: wallet.address, balance: ethers.utils.formatEther(balance) };
  },

  // Utility: generate encrypted key (for future secure storage)
  encryptKey: (privateKey) => {
    const cipher = crypto.createCipher("aes-256-cbc", "hind-browser-secret");
    let encrypted = cipher.update(privateKey, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
  },

  decryptKey: (encrypted) => {
    const decipher = crypto.createDecipher("aes-256-cbc", "hind-browser-secret");
    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  },

};
