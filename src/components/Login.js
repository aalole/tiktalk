import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    this.setState({
      [target.name]: target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { name, email, description } = this.state;

    /* This Generate random number that will be serve as the ID of the user */
    const randomNum = Math.ceil(Math.random() * 1000);
    const userData = {
      name,
      email,
      description,
      id: randomNum,
      role: "Member",
      photoUrl: "https://res.cloudinary.com/aalole/image/upload/v1603021145/Rasheed.jpg",
    };

    /* Store user data in browser's local storage */
    localStorage.setItem("currentTalkjsUser", JSON.stringify(userData));
    /*Redirect to my network page */
    this.props.history.push("/mynetwork");
  }
  render() {
    return (
      <div className="login-container">
      <h1>Supply your details to start Chatting</h1>
        <div className="login-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              placeholder="Name"
              className="input"
              required
            />
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              placeholder="Email"
              className="input"
              required
            />
            <textarea
              type="text"
              name="description"
              onChange={this.handleChange}
              placeholder="Short Description"
              className="input textarea"
            ></textarea>
            <input type="submit" className="button" placeholder="submit" />
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
