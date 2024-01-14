// Pure BMI calculation logic
function calculateBMILogic(height, weight) {
  // Check for non-negative values
  if (height <= 0 || weight <= 0) {
    return NaN; // Return NaN for negative or zero values
  }

  const heightInMeters = height / 100;
  return weight / heightInMeters ** 2;
}

// Main function interacting with the DOM
function calculateBMI(event) {
  event.preventDefault();

  // Get input values
  const height = parseFloat(document.getElementById("bmi-height").value);
  const weight = parseFloat(document.getElementById("bmi-weight").value);

  // Check for negative values
  if (height <= 0 || weight <= 0) {
    // Display an error message
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent =
      "Please enter valid positive values for height and weight.";
    return false; // Prevent further calculation
  }

  // Use the pure function for calculation
  const bmi = calculateBMILogic(height, weight);

  // Determine BMI category
  let category, calorieIntake;

  if (!isNaN(bmi)) {
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
  } else {
    category = "Invalid Input"; // Set category to handle invalid input
    calorieIntake = NaN; // Set calorie intake to NaN for invalid input
  }

  // Display the calculated BMI in the output element
  const bmiOutput = document.getElementById("bmi-output");
  bmiOutput.textContent = isNaN(bmi)
    ? "Invalid Input"
    : `Your BMI is: ${bmi.toFixed(2)}`;

  // Display the BMI category in the output element
  const categoryOutput = document.getElementById("category-output");
  categoryOutput.textContent = `Category: ${category}`;

  // Display the daily calorie intake in the output element
  const calorieOutput = document.getElementById("calorie-output");
  calorieOutput.textContent = isNaN(calorieIntake)
    ? "Invalid Input"
    : `Daily Calorie Intake: ${calorieIntake.toFixed(2)} calories`;

  // Show the result area
  const result = document.querySelector(".bmi-result");
  result.style.display = "block";

  // Clear any previous error message
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = "";

  // Prevent form submission
  return false;
}

module.exports = { calculateBMILogic }; // Export the pure function
