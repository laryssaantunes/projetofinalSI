const CryptoJS = require("crypto-js");

const publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7ZVGhLsI6sFTHLFj4Ez+JbgMvw5z3c6g0R43AXt5n4Wnn0Ojjd5u+YHgBoDjpF0mv6f6vBhTb2hV+lfIZlZTgf0P2eQ1HodJ3Zg6qM7YBR4y+U7O+oUu0TzUOow8grgveDpZ4dES6vf5HWzZa8l5r+j9gdXy5pE7Oq0+cbgx2HjZ1EB2IpXKvLwv5ghd/FmxKgu9sv6seVHK9pRJ2jz5+YsLTZz1U6cgOrU1E9v0gdEolHT0dp6ewV88W64ddz5iZ5XyL6R5PYNizj98Jv4RGFeX6iK7mlGgDhbF2m0az2AzJ5hMNMCY6DqOeWiA61mUgBGQXy7U8vH5+fZ5gLIVftCpnzzU0bwLnyc3yA==';

const privateKey = 'MIIBOgIBAAJBALRPqoy5w7RGhByJLeiv0XeHp/R1ZG1z6X5ptmnrP6mBNvAWD1scCZhfTGVuwEHu1p5o5zR2uFQhoop2N7l57d79MNk9ZmiOQ79n5wODTArbhxHh9VcdDg2n8Oe3a2cr+twmHlfSTiQilbeR60cW0aTtZdRi5TQXvh1JlFfeZBtpupHZC6XbwDDp7wdpTtkNKICi9ckZ1XlDmhqUqZaFFURj5kzZmBRjdS2ZL6Wp9xhXpdKt4wDAkP0Hq28InVaaZvCCQizR0/MV9tTtD0vkvZQU40RE5nGEO7poOG44sUwpKHhfeQfiBOzz5lOn2/BXow6fHhjUu6qFTz5qFhnQTl2tXzBZJdPpzxuD9vlJdmlKM1VQ==' 

const message = "Texto a ser criptografado";

// Criptografar com chave pública
function encryptMessage(publicKey, message) {
    
    return CryptoJS.AES.encrypt(message, publicKey).toString();
}

function decryptMessage(privateKey, encryptedMessage) {
    let bytes = CryptoJS.AES.decrypt(encryptedMessage, privateKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

let encryptedMessage = encryptMessage(publicKey, message);
console.log("Encrypted Message: ", encryptedMessage);

let decryptedMessage = decryptMessage(privateKey, encryptedMessage);
console.log("Decrypted Message: ", decryptedMessage);
