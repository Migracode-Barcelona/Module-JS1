const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);
console.log(last4Digits);


// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Make and explain a prediction about why the code won't work

/* The slice() method is a string method, which means it can only be used on string values, not numbers. 
To fix this convert cardNumber to a string */

// Then try updating the expression last4Digits is assigned to, in order to get the correct value
