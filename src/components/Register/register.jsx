import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./register.css"

const Register = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory("/profile");
    const handleClick = () => history.push("/");
    let specificUser;
    // let [jwt,setJWT] = useState(localStorage.getItem("token"));
  
    useEffect(() => {
      document.title = "Register - Live.Eat.Read";
    }, []);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        let loginInfo = {
          firstName: firstname,
          lastName: lastname,
          username: username,
          email: email,
          password: password,
        };
        
        await axios.post(
          "http://localhost:5000/api/collections/user",
        
          loginInfo
        );
  
        alert(
          "You have successfully registered your account! Please Click 'OK' to continue to login page."
        );
        history.push("/profile");
      } catch {
        localStorage.removeItem(specificUser);
        console.log("HandleSubmit has failed");
      }
    };

    return (
      <div className="reg-container">
        <form onSubmit={handleSubmit}>
        <div class="form-floating mb-3">
        <label className="form-control-label text-muted">
                    First Name
                    </label>{" "}
          <input
            type="text"
            class="form-control"
            id="floatingInputFirstname"
            placeholder="First nName"
            required
            autoFocus
            onChange={({ target }) => setFirstName(target.value)}
          />
        </div>

        <div class="form-floating mb-3">
        <label className="form-control-label text-muted">
                    Last Name
                    </label>{" "}
          <input
            type="text"
            class="form-control"
            id="floatingInputLastname"
            placeholder="Last Name"
            required
            autoFocus
            onChange={({ target }) => setLastName(target.value)}
          />
        </div>

        <div class="form-floating mb-3">
        <label className="form-control-label text-muted">
                    Username
                    </label>{" "}
          <input
            type="text"
            class="form-control"
            id="floatingInputUsername"
            placeholder="Username"
            required
            autoFocus
            onChange={({ target }) => setUserName(target.value)}
          />
        </div>

        <div class="form-floating mb-3">
        <label className="form-control-label text-muted">
                    Email
                    </label>{" "}
          <input
            type="email"
            class="form-control"
            id="floatingInputEmail"
            placeholder="Email Address"
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>

        <hr />

        <div class="form-floating mb-3">
        <label className="form-control-label text-muted">
                    Password
                    </label>{" "}
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>

        <div class="d-grid mb-2">
          <button
            class="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
            type="submit"
          >
            Register
          </button>
        </div>

        <a class="d-block text-center mt-2 small" href="/">
          Have an account? Sign In
        </a>

        <hr class="my-4" />

      </form>
      </div>
    );
}

export default Register;