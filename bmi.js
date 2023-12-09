function calculateBMI(event) {
  event.preventDefault();
  // Get input values
  const height = parseFloat(document.getElementById("bmi-height").value);
  const weight = parseFloat(document.getElementById("bmi-weight").value);
  const age = parseFloat(document.getElementById("bmi-age").value);
  const gender = document.querySelector('input[name="radio"]:checked').id;

  // Calculate BMI
  const heightInMeters = height / 100;
  const bmi = weight / heightInMeters ** 2;

  // Determine BMI category
  let category, calorieIntake;

  if (bmi < 18.5) {
    category = "Underweight";
    // Calculate calorie intake for underweight individuals (example values, you can adjust them)
    calorieIntake = 40 * weight;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal Weight";
    // Calculate calorie intake for normal weight individuals (example values, you can adjust them)
    calorieIntake = 35 * weight;
  } else {
    category = "Overweight";
    // Calculate calorie intake for overweight individuals (example values, you can adjust them)
    calorieIntake = 30 * weight;
  }

  // Display the calculated BMI in the output element
  const bmiOutput = document.getElementById("bmi-output");
  bmiOutput.textContent = `Your BMI is: ${bmi.toFixed(2)}`;

  // Display the BMI category in the output element
  const categoryOutput = document.getElementById("category-output");
  categoryOutput.textContent = `Category: ${category}`;

  // Display the daily calorie intake in the output element
  const calorieOutput = document.getElementById("calorie-output");
  calorieOutput.textContent = `Daily Calorie Intake: ${calorieIntake.toFixed(
    2
  )} calories`;
  // Show the result area
  const result = document.querySelector(".bmi-result");
  result.style.display = "block";

  // Prevent form submission
  return false;
}
