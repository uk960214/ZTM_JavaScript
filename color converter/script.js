const color = prompt('please input color string');

// Function to check for intergers
const isInt = n => n % 1 === 0;

// Check if number is interger between 0 and 255
const rgbNumberCheck = arr => {
  for(num of arr){
    if (isInt(num) !== true || num < 0 || num > 255) {
      return false
    };
  };
  return true
}

// split rgb string into array for further checking
const stringToArray = arr => {
  if (color.includes(',')){
    const colorArray = color.split(',').filter(num => num.length > 0).map(num => Number(num))
    return colorArray
  } else {
    return false
  }
}

// check if the color is rgb format
const isRgb = color => {
  const colorArray = stringToArray(color);
  if (colorArray === false) { return false };
  if (colorArray.length !== 3) { return false };
  if (rgbNumberCheck(colorArray) === false) { return false };
  return true
}

// check if the color is 6 digits and number when passed through Number object
const isHex = color => {
  if(color.length !== 6) { return false };
  if(isNaN(Number('0x'+color))) { return false };
  return true
}

// check format
const formatCheck = color => {
  if(isRgb(color)) { return 'rgb' } 
  else if(isHex(color)) { return 'hex' } 
  else { return 'none' }
}

// turn hex digits to R,G,B and return string
const hexToRgb = color => {
  const rgbArray = []
  for(let i = 0; i < color.length; i = i+2) {
    const part = color.slice(i, i+2);
    const dec = Number('0x'+part).toString(10)
    rgbArray.push(dec)
  }
  const rgbString = 'RGB(' + rgbArray.join(', ') + ')'
  return rgbString
}

// turn rgb into hex, format so that it's 6 digits and return string
const rgbToHex = color => {
  const colorArray = stringToArray(color);
  const hexArray = colorArray.map(num => num.toString(16))
  hexArray.forEach((num,i) => {
    if (num.length < 2){
      hexArray[i]= '0' + num
    }
  })
  const hexString = '#' + hexArray.join('')
  return hexString
}

// turn hex to rgb, rgb to hex, and wrong format shows error message
const converter = color => {
  let result = ''
  switch (formatCheck(color)) {
    case 'hex':
      result = hexToRgb(color);
      break;
    case 'rgb':
      result = rgbToHex(color);
      break;
    case 'none':
      result = 'Wrong Format. Please Try Again!'
  }
  return alert(result)
}

const convertedColor = converter(color);