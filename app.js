const {encrypt} = require('./script');
const {decrypt} = require('./script');

const testPayload = {
  username: 'keerthana',
  role: 'admin',
};



const token = encrypt(testPayload);
const decoded = decrypt(token);
console.log(token);
console.log(decoded);
