import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setMessage('Please enter your phone, email, or username');
    } else {
      setMessage(`You entered: ${inputValue}`);
      setInputValue('');
    }
  };

  // Google sign-in
  const googleSignIn = () => setMessage("Google sign-in clicked");

  // Apple sign-in
  const appleSignIn = () => setMessage("Apple sign-in clicked");

  // Forget password
  const handleForgetPassword = () => setMessage("Redirecting to Forget Password...");

  // Sign up
  const handleSignUp = () => setMessage("Redirecting to Sign Up...");

  return (
    <div>
      <div className="logo-box">
        <img src="/birdlogo.png" alt="logo" className="logo" />
        <h2>Sign In to Twitter</h2>

        <button type="button" onClick={googleSignIn}>
          <img src="/google.png" alt="google" /> Sign in with Google
        </button>

        <button type="button" onClick={appleSignIn}>
          <img src="/apple.png" alt="apple" /> Sign in with Apple
        </button>

        <hr />
        <span>Or</span>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone, email, or username"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Next</button>
        </form>

        <button type="button" onClick={handleForgetPassword}>Forget Password</button>

        <p>
          Don't have an account?{' '}
          <a href="#" onClick={(e) => { e.preventDefault(); handleSignUp(); }}>
            Sign Up
          </a>
        </p>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default App;
