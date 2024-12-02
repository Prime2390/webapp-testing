# Functional Testing: Overview

Functional testing ensures that the website's core functionalities work as intended. These tests simulate user interactions to verify proper behavior under typical and edge-case conditions.

---

## Test Scenarios:

1. **User Registration**  
   **Goal:** Verify the correctness of the account creation process.  
   **Test Cases:**
   - Register with a valid email and password.
   - Attempt registration with an already registered email.
   - Register with an invalid email format.
   - Register with a weak password.

2. **Login/Logout**  
   **Goal:** Validate the login and logout processes.  
   **Test Cases:**
   - Log in with valid credentials.
   - Attempt login with incorrect email or password.
   - Log out successfully after logging in.
   - Attempt to access secure pages without logging in.

3. **Adding Products to the Cart**  
   **Goal:** Ensure users can add products to the cart.  
   **Test Cases:**
   - Add a single product to the cart.
   - Add multiple products to the cart.
   - Remove a product from the cart.
   - Attempt to add an out-of-stock product.
   - Update product quantity in the cart.

4. **Browsing Products**  
   **Goal:** Ensure users can search for and view product details.  
   **Test Cases:**
   - Search for a product with a valid keyword.
   - Search for a product with an invalid keyword (expected: no results).
   - Filter products by category or price.
   - Open a product detail page and verify displayed information.

5. **Order Finalization**  
   **Goal:** Verify that users can complete orders.  
   **Test Cases:**
   - Place an order with valid payment and delivery details.
   - Attempt to place an order with missing information.
   - Verify the accuracy of the order summary (costs, products).
   - Confirm receipt of the order confirmation email.

6. **Contact Form**  
   **Goal:** Validate the contact form functionality.  
   **Test Cases:**
   - Submit the form with valid data.
   - Attempt submission with missing fields.
   - Use an invalid email format and verify error handling.
   - Verify confirmation message after successful submission.

---

## Tools
- **Framework:** Cypress
- **Browser:** Chrome

---

Feel free to adjust or expand this plan as needed.
