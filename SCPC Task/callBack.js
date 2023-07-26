
function calculate(num1, num2, operation) {
  const result = operation(num1, num2);
  console.log("Result:", result);
}

function add(a, b) {
  return a + b;
}


function multiply(x, y) {
  return x * y;
}


// calculate(5, 3, add); 
calculate(5, 3, multiply);
