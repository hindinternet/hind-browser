// storage.js
// Secure Storage Module for Hind Browser

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

module.exports = {
  saveFile: (filename, data) => {
    const filePath = path.join(__dirname, filename);
    fs.writeFileSync(filePath, data);
    return { success: true, filePath };
  },

  readFile: (filename) => {
    const filePath = path.join(__dirname, filename);
    if (!fs.existsSync(filePath)) return { error: "File not found" };
    const data = fs.readFileSync(filePath, 'utf8');
    return { data };
  },

  encryptData: (data, key) => {
    const cipher = crypto.createCipher('aes-256-cbc', key);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  },

  decryptData: (data, key) => {
    const decipher = crypto.createDecipher('aes-256-cbc', key);
    let decrypted = decipher.update(data, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  },
};
