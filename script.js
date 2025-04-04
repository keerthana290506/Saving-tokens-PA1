require('dotenv').config()
const jwt = require('jsonwebtoken')

const secret = process.env.ACCESS_TOKEN

const encrypt = (payload) => {
  // const secret = process.env.ACCESS_TOKEN
  const token = jwt.sign(payload, secret, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
  console.log(token);
  return token;

  // your code here and return token
};

const decrypt = (token)=>{
  try{
  const decoded = jwt.verify(token,secret,{algorithm:['HS256']})
  console.log(decoded);
  return decoded
  }catch(err){
    console.error(err.message);
    return null;

  }
}

module.exports = {encrypt,decrypt};
