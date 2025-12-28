# Form Handling in React

This project demonstrates two approaches to form handling in React:
1. **Controlled Components**: Manual state management using `useState`.
2. **Formik**: Advanced form handling with `Formik` and validation using `Yup`.

## Features

- **User Registration Form**: Fields for username, email, and password.
- **Validation**:
  - Controlled: Basic required field check.
  - Formik: Schema-based validation for required fields and email format.
- **Component Structure**:
  - `src/components/RegistrationForm.jsx`: Controlled component implementation.
  - `src/components/formikForm.jsx`: Formik implementation.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Toggle between components in `src/App.jsx` to test each implementation.
