// Importing dependencies
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { jest } from "@jest/globals";

// Mocking Firebase Auth module
jest.mock("firebase/auth");

describe("Firebase Authentication", () => {
  it("should create a new user with email and password", async () => {
    // Mock implementation of createUserWithEmailAndPassword
    const mockCreateUserWithEmailAndPassword = jest.fn();
    createUserWithEmailAndPassword.mockImplementation(
      mockCreateUserWithEmailAndPassword
    );

    // Dummy data for testing
    const email = "test@example.com";
    const password = "password123";

    // Calling the function with test data
    await createUserWithEmailAndPassword(getAuth(), email, password);

    // Expect the mock function to have been called
    expect(mockCreateUserWithEmailAndPassword).toHaveBeenCalledWith(
      getAuth(),
      email,
      password
    );
  });
});
