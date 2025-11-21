// wallet.js
// Hind Browser Backend Wallet Module

const crypto = require("crypto");

const wallets = {}; // in-memory wallet storage (for demo, replace with DB for prod)

module.exports = {

  // 1. Create a new wallet
  createWallet: (userId) => {
    if (wallets[userId]) {
      return { success: true, message: "Wallet already exists", wallet: wallets[userId] };
    }
    const privateKey = crypto.randomBytes(32).toString("hex");
    const publicKey = crypto.createHash("sha256").update(privateKey).digest("hex");
    wallets[userId] = { publicKey, privateKey, balance: 0 };
    return { success: true, message: "Wallet created", wallet: wallets[userId] };
  },

  // 2. Get wallet details
  getWallet: (userId) => {
    if (!wallets[userId]) return { success: false, message: "Wallet not found" };
    return { success: true, wallet: wallets[userId] };
  },

  // 3. Add balance (simulate deposit)
  addBalance: (userId, amount) => {
    if (!wallets[userId]) return { success: false, message: "Wallet not found" };
    wallets[userId].balance += amount;
    return { success: true, balance: wallets[userId].balance };
  },

  // 4. Deduct balance (simulate spend)
  deductBalance: (userId, amount) => {
    if (!wallets[userId]) return { success: false, message: "Wallet not found" };
    if (wallets[userId].balance < amount) return { success: false, message: "Insufficient funds" };
    wallets[userId].balance -= amount;
    return { success: true, balance: wallets[userId].balance };
  },

  // 5. Transfer between users
  transfer: (fromUserId, toUserId, amount) => {
    if (!wallets[fromUserId] || !wallets[toUserId]) return { success: false, message: "Wallet not found" };
    if (wallets[fromUserId].balance < amount) return { success: false, message: "Insufficient funds" };
    wallets[fromUserId].balance -= amount;
    wallets[toUserId].balance += amount;
    return { success: true, message: "Transfer successful" };
  },

};
