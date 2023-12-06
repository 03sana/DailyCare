// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMvmCPoLhkvmuHmjj0fyeX_VXSOPmVrXU",
  authDomain: "signup-form-54011.firebaseapp.com",
  projectId: "signup-form-54011",
  storageBucket: "signup-form-54011.appspot.com",
  messagingSenderId: "408119008262",
  appId: "1:408119008262:web:762115efb69bdce11d7787",
  measurementId: "G-6KBSGB83R0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);

//----- New Registration code start
document.getElementById("signUp").addEventListener("click", function () {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  //For new registration
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      alert("Registration successfully!!");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage);
      alert(error);
    });
});
document.addEventListener("DOMContentLoaded", function () {
  // Add animate class to header-section and landing-section
  document.querySelector(".header-section").classList.add("animate");
  document.querySelector(".landing-section").classList.add("animate");
});
document.addEventListener("DOMContentLoaded", function () {
  const serviceItems = document.querySelectorAll(".service-item");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-up");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  serviceItems.forEach((item) => {
    observer.observe(item);
  });
});

function calculateBMI(e) {
  e.preventDefault();
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
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

// Display mobile menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Script for handling the pop-up modal
function closeModal() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("modal").style.display = "none";
}

document
  .getElementById("sign-up-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    // Show the modal after successful registration
    document.getElementById("overlay").style.display = "block";
    document.getElementById("modal").style.display = "block";
  });

// Close the modal when the "Close" button is clicked
document.getElementById("close-btn").addEventListener("click", closeModal);

// Close the modal when the overlay is clicked
document.getElementById("modal").addEventListener("click", function (event) {
  if (event.target === document.getElementById("modal")) {
    closeModal();
  }
});
