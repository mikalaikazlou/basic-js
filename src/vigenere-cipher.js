const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    let indexKey = 0;
    let result = '';
    const messageUp = message.toUpperCase();
    const keyUpper = key.toUpperCase();

    for (let index = 0; index < messageUp.length; index++) {
      if (messageUp[index].match(/[A-Z]/)) {
        const messageCharCode = messageUp.charCodeAt(index) - 'A'.charCodeAt(0);
        const keyCharCode = keyUpper.charCodeAt(indexKey) - 'A'.charCodeAt(0);

        const countPlus = (messageCharCode + keyCharCode) % this.alphabet.length;
        result += this.alphabet[countPlus];


        indexKey = (indexKey + 1) % keyUpper.length;
      } else {
        result += messageUp[index];
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
        let indexKey = 0;
        let result = '';
        const encryptedMessageUp = encryptedMessage.toUpperCase();
        const keyUpper = key.toUpperCase();

        for (let index = 0; index < encryptedMessageUp.length; index++) {
            if (encryptedMessageUp[index].match(/[A-Z]/)) {
                const encryptedCharCode = encryptedMessageUp.charCodeAt(index) - 'A'.charCodeAt(0);
                const keyCharCode = keyUpper.charCodeAt(indexKey) - 'A'.charCodeAt(0);
                const countMinus = (encryptedCharCode - keyCharCode + this.alphabet.length) % this.alphabet.length;
                result += this.alphabet[countMinus];
                indexKey = (indexKey + 1) % keyUpper.length;
            } else {
                result += encryptedMessageUp[index];
            }
        }

        return this.direct ? result : result.split('').reverse().join('');
    }
}

module.exports = {
  VigenereCipheringMachine
};
