import React, { Component } from 'react';


class UserProfile extends Component {
    componentDidMount()
    {
        const {match} = this.props;
        if(match.params.userId)
        {
            // dispatch an action
        }
    }
  render() {
    // console.log('this.props',this.props);
    const {
      match: { params },
    } = this.props;
    console.log('this is params', params);
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651"
            alt="user-dp"
          />
        </div>
        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">Some Name</div>
        </div>
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">test@test.com</div>
        </div>
        <div className="btn-grp">
          <div className="utton save-btn">Add Friend</div>
        </div>
      </div>
    );
  }
}
export default UserProfile;
