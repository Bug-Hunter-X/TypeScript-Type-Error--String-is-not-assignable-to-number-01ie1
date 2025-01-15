function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error("Invalid input: Both arguments must be numbers.");
    return 0; // or throw an error
  }
}

let result1 = addSafe(1, 2); // result1: number = 3
let result2 = addSafe("1", 2); // Error message and result2: number = 0
let result3 = addSafe(1, "2"); // Error message and result3: number = 0

//Alternative using type assertion (use with caution):
let result4 = add(parseInt("1") as number, 2); // result4: number =3