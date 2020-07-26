import CryptoJS from 'crypto-js';
import { LOCALSTORAGE_KEY } from '../utils/constants';
export const decrypt = () => {
  const key = process.env.REACT_APP_ENCRYPTION_KEY;
  console.log(key)

  const encryptedData = localStorage.getItem(LOCALSTORAGE_KEY);
  // if encryptedData is undefined, then the process below breaks
  if (encryptedData) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, key);
    const token = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(token);
  }
};

export const storeDataInLocalStorage = data => {
  const key = 'process.env.REACT_APP_ENCRYPTION_KEY';
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();

  localStorage.setItem(LOCALSTORAGE_KEY, encryptedData);
};

