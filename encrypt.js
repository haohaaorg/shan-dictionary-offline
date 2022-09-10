const CryptoJS = require('crypto-js')
const data = require('./shn2shn.json')
// const data = require('./shn2bur.json')
const fs = require('fs')
const encryptMe = (mes, key) => {
  return CryptoJS.AES.encrypt(mes, key).toString();
}

const encrypted = data.map((e)=>{
  const word = encryptMe(e.word,''); // must provide a key
  const definition = encryptMe(e.definition,'') // must provide a key
  return {_id:e._id,word:e.word,type:e.type,definition}
})

fs.writeFileSync('public/shn2shn-encrypted.json',JSON.stringify(encrypted));