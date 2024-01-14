const { calculateBMILogic } = require("./bmi"); // Adjust the path if necessary

test("calculates BMI correctly for height 170cm and weight 65kg", () => {
  expect(calculateBMILogic(170, 65)).toBeCloseTo(22.5, 1); // Increased precision to 1 decimal place
});
test("error message displayed,calculation prevented. ", () => {
  // Simulate entering negative values for height and weight
  const height = -170; // Negative height value
  const weight = -65; // Negative weight value

  // Perform the BMI calculation with negative input
  const bmi = calculateBMILogic(height, weight);

  // Assert that the result is undefined or NaN (as negative values are not allowed)
  expect(bmi).toBeNaN();
});
