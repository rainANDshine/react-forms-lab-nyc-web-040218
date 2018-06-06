import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleLoginInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.onSubmit(this.state.username, this.state.password);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username"
              value={this.state.username} onChange={this.handleLoginInput} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password"
              value={this.state.password} onChange={this.handleLoginInput} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
