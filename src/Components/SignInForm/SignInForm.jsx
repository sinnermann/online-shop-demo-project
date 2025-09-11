import "./SignInForm.styles.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 import hook
import FormInput from "../Form-Input/FormInput";
import Button from "../Button/Button";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const navigate = useNavigate(); // 👈 initialize

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would normally validate/authenticate
    navigate("/shop"); // 👈 redirect to shop after submit
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>(JUST CLICK THE BUTTON BELOW) Sign In with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          {/* normal sign in */}
          <Button type="submit">JUST CLICK to Sign In</Button>

          {/* google sign in */}
          <Button
            buttonType="google"
            type="button"
            onClick={() => navigate("/shop")} // 👈 go straight to shop
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
