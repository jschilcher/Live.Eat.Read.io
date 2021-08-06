import React, { useState, useEffect /*, PropTypes*/ } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userData, setUserData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  let specificUser;

  useEffect(() => {
    document.title = "Login - Live.Eat.Read.";
  }, []);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async (event) => {
    await axios
      .get("http://localhost:5000/api/collections/user")
      .then((response) => {
        setUserData(response.data);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      specificUser = userData.filter(function (el) {
        return email === el.email;
      });
      localStorage.setItem("specificUser", JSON.stringify(specificUser));
      setUserData(specificUser);
      history.push("/profile");
    } catch {
      localStorage.removeItem(userData);
      setUserData(null);
      console.log("HandleSubmit has failed");
    }
  };

  return (
      <div>
          <h2>Please login to your account</h2>
           <form onSubmit={handleSubmit} method="POST">
                <div className="form-group">
                  {" "}
                  <label className="form-control-label text-muted">
                    Email
                  </label>{" "}
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    onChange={({ target }) => setEmail(target.value)}
                  />
                  <div className="form-group">
                    {" "}
                    <label className="form-control-label text-muted">
                      Password
                    </label>{" "}
                    <input
                      type="password"
                      id="psw"
                      name="psw"
                      placeholder="Password"
                      className="form-control"
                      onChange={({ target }) => setPassword(target.value)}
                    />
                    <div className="row justify-content-center my-3 px-3">
                      <input
                        className="btn-block btn-color"
                        type="submit"
                        value="Login"
                      />
                    </div>
                  </div>
                </div>
              </form>
      </div>
  );
};

export default Login;