import React, { Component } from 'react';
import { connect } from 'react-redux';
import {editUser, clearAuthState} from '../actions/auth';
import {FilesUploadComponent} from './index';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.auth.user.name,
      password: '',
      confirmPassword: '',
      editMode: false,
      gender:' ',
    };
  }
  handleChange  = (fieldName,val) =>
  {
    this.setState({
   [fieldName]:val
     })
         
  }

  handleSave = () =>
  {
    const{password,confirmPassword,name}=this.state;
    const {user} = this.props.auth;
    this.props.dispatch(editUser(name,password,confirmPassword,user._id));

  };
  componentWillUnmount()
  {
    this.props.dispatch(clearAuthState());
  }
  render() {
    const { user ,error} = this.props.auth;
    const { editMode } = this.state;
    const {profileImg} = this.props;
    return (
      <div className="settings">
        <div className="img-container" style={{border:2,borderColor:"black",height:100,width:100}}>
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIhCBq-WV5kdxy5e-8fgzaYKejJFYOUnTt1Q&usqp=CAU"
            alt="user-dp"
            id="user-dp"
          /> */}
         <img src="`${profileImg}`"
         alt="user-dp"
         id="user-dp"/>

        </div>
        
       <FilesUploadComponent/>

        {error && <div className="alert error-dialog">
          {error}</div>}
          {error === false&& <div className="alert success-dialog">
          Successfully updates profile</div>}


        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>
        <div className="field">
          <div className="field-label">Name</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange('name',e.target.value)}
              value={this.state.name}
            />
          ) : (
            <div className="field-value">{user.name}</div>
          )}
        </div>
        <div className="field">
          <div className="field-label">Gender</div>
          <div className="field-value">{user.gender}</div>
        </div>
        {editMode && (
          <div className="field">
            <div className="field-label">New Password</div>
            <input
              type="password"
              onChange={(e) => this.handleChange('password',e.target.value)}
              value={this.state.password}
            />
          </div>
        )}
        {editMode && (
          <div className="field">
            <div className="field-label">Confirm Password</div>
            <input
              type="password"
              onChange={(e) => this.handleChange('confirmPassword',e.target.value)}
              value={this.state.confirmPassword}
            />
          </div>
        )}
        <div className = "btn-grp">
            {editMode ? (<button className="button save-btn" onClick={this.handleSave}>Save</button>):
            (<button className="button edit-btn" onClick={(e) => this.handleChange('editMode',true)}>Edit profile</button>)}
        {editMode && (
        <div className="go-back"
        onClick={(e) => this.handleChange('editMode',false)}>
          Go back
          </div>
          )}
            </div>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return {
    auth,
  };
}
export default connect(mapStateToProps)(Settings);
