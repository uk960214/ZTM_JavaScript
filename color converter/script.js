const a = 240
const b = a.toString(16);
const c = Number('0xf0');
const d = c.toString(10);

const toHex = num => num.toString(16)
const toDec = num => num.toString(10)

const converter = (num1,num2,num3) => {
  if (num2 === undefined && num1.length === 6){
    console.log('hex');
  } else if(num1.toString().length<=3 &&
            num2.toString().length<=3 &&
            num3.toString().length<=3) {
    console.log('rgb')
  } else {
    console.log('wrong format, try again')
  }
}

