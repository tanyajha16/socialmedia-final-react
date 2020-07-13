import React from 'react';
import PropTypes from 'prop-types';
// import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route,Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
// import PostsList from './index';
// import PostsList from './PostsList';
import Navbar from './navbar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Page404 from './Page404';
import * as jwtDecode from 'jwt-decode';
import Settings from '../components/settings';
import { authenticateUser } from '../actions/auth';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';
 import UserProfile from'../components/UserProfile';

// const Login = () => <div>Login</div>;

// const Signup = () => <div>Signup</div>;
// const Settings =()=> <div>Settings</div>;
const PrivateRoute = (privateRouteProps) =>
{
  const {isLoggedin,path,component:Component} = privateRouteProps;
  return <Route path={path} render={(props) => {
    return isLoggedin ? <Component {...props} />:<Redirect to =
    {{
    pathname:'/login' ,
  state:{
   from: props.location,
  }  
}}/>;
  }} />
};
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    // const token = localStorage.getItem('token');
const token =getAuthTokenFromLocalStorage();
    if(token)
    {
      const user = jwtDecode(token);

      console.log('user',user);
      this.props.dispatch(authenticateUser({
        email:user.email,
        _id:user._id,
        name:user.name
      }));
    }
  }
  render() {
    const { posts ,auth} = this.props;
    // console.log('props', this.props);
    return (
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={posts} /> */}
          {/* specyfying different routes */}
          <Switch>
          <Route exact={true} path="/" render=
          { (props) => { 
            // passing props of posts here as this 
            return <Home {...props} posts ={posts}  />
          }} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/settings" component={Settings} isLoggedin={auth.isLoggedin}/>
          {/* if we dont give path then 404 gets rendered */}
          <PrivateRoute path="/user/:userId" component={UserProfile} isLoggedin={auth.isLoggedin}/>
          <Route component ={Page404}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    auth:state.auth,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);
