import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchUsers } from '../actions/search';
import { logoutUser } from '../actions/auth';
import {NoResults} from './';

class Navbar extends React.Component {
  logOut = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  };
  handleSearch = (e) => {
    const searchText = e.target.value;
    this.props.dispatch(searchUsers(searchText));
  };

  render() {
    const { auth, results,error } = this.props;
    if (searchUsers.inProgress) {
      return <h1>Loading!</h1>;
    }
    return (
      <nav className="nav">
        <div className="left-div">
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyZgyRyNwMfEc2hH421D9AU_K5J9T6db9aoQ&usqp=CAU"
            alt="logo" 
            style={{height:100,width:200}}
            />
           
          </Link>
        </div>
        <div className="search-container">
          <img
            className="search-icon"
            src="https://image.flaticon.com/icons/svg/483/483356.svg"
            alt="search-icon"
          />
          <input placeholder="Search" onChange={this.handleSearch} />
          {results.length > 0 && (
            <div className="search-results">
              <ul>
                {results.map((user) => (
                  
                  <li className="search-results-row" key={user._id}>
                    <Link to= {`/user/${user._id}`}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIhCBq-WV5kdxy5e-8fgzaYKejJFYOUnTt1Q&usqp=CAU"
                      alt="user-dp"
                    />
                    <span>{user.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {error && <NoResults/>}
        </div>
        <div className="right-nav">
          {auth.isLoggedin && (
            <div className="user">
              <Link to="/settings">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIhCBq-WV5kdxy5e-8fgzaYKejJFYOUnTt1Q&usqp=CAU"
                  alt="user-dp"
                  id="user-dp"
                />
              </Link>
              <span>{auth.user.name}</span>
            </div>
          )}

          <div className="nav-links">
            <ul>
              {!auth.isLoggedin && (
                <li>
                  <Link to="/login">Log in</Link>
                </li>
              )}

              {auth.isLoggedin && <li onClick={this.logOut}>Log out</li>}

              {!auth.isLoggedin && (
                <li>
                  <Link to="/signup">Register</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    results: state.search.results,
    error:state.search.error
  };
}
export default connect(mapStateToProps)(Navbar);
