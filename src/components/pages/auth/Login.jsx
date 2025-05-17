import "./Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    let req = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    req = await req.json();

    if (req.token) {
      navigate("/home");
      localStorage.setItem("accessToken", req.token);
      setError("");
    } else {
      setError("Invaid input! Chek your email or password and try again");
    }
  };

  // const onSubmit = e => {
  // 	e.preventDefault()

  // 	if (email === 'ali@owa.uz' && password === 'pass12345') {
  // 		navigate('/home')
  // 		localStorage.setItem(
  // 			'accessToken',
  // 			'7eadfjahehcfq7jkdafkcvzxvbajhznxbvcayu032432r**-/234/v*cv'
  // 		)
  // 		setError('')
  // 	} else {
  // 		setError('Xatolik yuz berdi')
  // 	}
  // }
  return (
    <div className="login__form">
      <div className="form__container">
        <form className="sign-in" onSubmit={onSubmit}>
          <h2>Sign In</h2>
          <label>Email Address</label>
          <input
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <p className="error">{error}</p>
          <button type="submit">Sign In</button>
          <span>
            <h3>Forget Password?</h3>
            <h3>
              Don't have an account?
              <p>Sign Up</p>
            </h3>
          </span>
        </form>
        <div className="imges"></div>
      </div>
    </div>
  );
}

export default Login;
