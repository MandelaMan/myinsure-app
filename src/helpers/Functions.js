import CryptoJS from "crypto-js";
import Cookies from "js-cookie";

export const getCookie = (cookie_name) => {
  return Cookies.get(cookie_name);
};

export const deleteCookie = (cookie_name) => {
  return Cookies.remove(cookie_name);
};

export const addCookie = (payload, cookie_name) => {
  var date = new Date();
  var minutes = 500;

  date.setTime(date.getTime() + minutes * 60 * 10000);

  Cookies.set(cookie_name, payload, {
    expires: date,
    samesite: "None",
  });
};

export const encryptData = (data) => {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    process.env.REACT_APP_SECRET
  ).toString();

  return ciphertext;
};

export const decryptData = (ciphertext) => {
  //check decrypt
  var bytes = CryptoJS.AES.decrypt(ciphertext, process.env.REACT_APP_SECRET);
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decryptedData;
};

export const addCommas = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.25,
    },
  },
  exit: {
    ease: "easeInOut",
    opacity: 0,
  },
};

export const checkEmptiness = (content) => {
  return typeof content === "undefined" || content === null;
};

export const sanitizeProductName = (name) => {
  return name.replace(/\s+/g, "-").toLowerCase();
};
