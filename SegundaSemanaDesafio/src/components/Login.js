import React, { Component } from "react";
import { login, register } from "../services/loginService";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      username: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = event => {
    try {
      login(this.state);
    } catch (err) {
      event.preventDefault();
      alert(`Error: ${err.message}`);
    }
  };

  handleRegister = event => {
    try {
      register(this.state);
      login(this.state);

      const { history } = this.props;
      history.push("/");
    } catch (err) {
      event.preventDefault();
      alert(`Error: ${err.message}`);
    }
  };

  handleSubmit = () => {
    const { history } = this.props;
    history.push("/");
  };

  render() {
    const { username, password } = this.state;

    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 font-weight-normal">Login / Register</h1>
        </div>

        <div className="form-label-group">
          <label htmlFor="inputEmail">Username</label>
          <input
            name="username"
            onChange={this.handleChange}
            value={username}
            className="form-control"
            placeholder="Username"
            required
          />
        </div>

        <div className="form-label-group mt-2">
          <label htmlFor="inputPassword">Password</label>
          <input
            name="password"
            onChange={this.handleChange}
            value={password}
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>

        <div className="mt-5">
          <button
            className="login btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={this.handleLogin}
          >
            Login
          </button>
          <button
            className="register btn btn-lg btn-secondary btn-block"
            type="submit"
            onClick={this.handleRegister}
          >
            Register
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
