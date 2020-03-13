let letter = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let num = '';

let RandomId = () => {
    for (let i = 0; i < 6; i++) {
      num += letter[Math.floor(Math.random()*letter.length)];
    }
    return num;
}

export { RandomId };