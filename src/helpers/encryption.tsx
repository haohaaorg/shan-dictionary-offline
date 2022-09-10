import CryptoJS from 'crypto-js'

export const encryptMe = (mes: string, key: string) => {
  return CryptoJS.AES.encrypt(mes, key).toString()
}

export const decryptMe = (mes: string, key: string) => {
  const bytes = CryptoJS.AES.decrypt(mes, key)
  return bytes.toString(CryptoJS.enc.Utf8).toString()
}
