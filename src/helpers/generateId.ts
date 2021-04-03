export default function generateRandomId() {
    let min = 99999;
    let max = 999999;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }