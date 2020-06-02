/**
 * @author evivehealth on 18/04/18.
 */

const addNumbers = (a = 0, b = 0) => {
  let num1 = a, num2 = b;
  if (Number.isNaN(num1)) {
    num1 = 0;
  }
  if (Number.isNaN(num2)) {
    num2 = 0;
  }
  return Number(num1) + Number(num2);
};

export { addNumbers };
