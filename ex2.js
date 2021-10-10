//++ AKA counter=counter+1
//<= AKA less than or equal to
for (let x = 1; x <= 100; x++) {
// this is an empty string
  let output = "";
//% is division sign
//== AKA comparision operator
  if (x % 3 == 0) output += "Fizz";
  if (x % 5 == 0) output += "Buzz";
//|| AKA  "or"
  console.log(output || x);
}
