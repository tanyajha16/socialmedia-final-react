import React, { Component } from 'react';
import{Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login, clearAuthState} from '../actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    // this.emailInputRef=React.createRef();
    // this.passwordInputRef=React.createRef();
    this.state = {
      email: '',
      password: '',
    };
  }
  componentWillUnmount()
  {
    this.props.dispatch(clearAuthState());
  }
  handleEmailChange=(e) =>
  {
      console.log(e.target.value);
      this.setState ({
          email:e.target.value
      });
  }

  handlePasswordChange = (e) =>
  {
      console.log(e.target.value);
      this.setState({
      password:e.target.value
    });
  }
    handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log("this.emailInputRef",this.emailInputRef);
    // console.log("this.passwordInputRef",this.passwordInputRef);
   console.log("my state",this.state);
   const {email,password} = this.state;
   if(email && password)
   {
     this.props.dispatch(login(email,password));
   }
};
  render() {
      console.log("new state",this.state);
      const {error,inProgress,isLoggedin} = this.props.auth;
      const  {from} = this.props.location.state || {from :{pathname:'/'}}; 
      if(isLoggedin)
        {
          return <Redirect to={from}/>
        }
    return (
      <form className="login-form">
        <span className="login-signup-header">Log in</span>
        {error && <div className="alert-error-dailog">{error}</div>}
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            // ref={this.emailInputRef}
            onChange = {this.handleEmailChange}
            value={this.state.email}
         />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="password"
            required
            // ref={this.passwordInputRef}
            onChange={this.handlePasswordChange}
            value={this.state.password}
         />
        </div>

        <div className="field">
          {inProgress ? 
          <button onClick={this.handleFormSubmit} disabled={inProgress}>Loggin in....</button>:
          <button onClick = {this.handleFormSubmit} disabled={inProgress}>Log In</button>

      }
          {/* <button onClick={this.handleFormSubmit} disabled={inProgress}> Log in </button> */}
        </div>
      </form>
    );
  }
}
function mapStateToProps(state)
{
  return{
    auth:state.auth,
  };
}
export default connect(mapStateToProps)(Login);
