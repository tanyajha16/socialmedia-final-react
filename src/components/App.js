import React from 'react';
import PropTypes from 'prop-types';
// import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
// import PostsList from './index';
// import PostsList from './PostsList';
import Navbar from './navbar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Page404 from './Page404';
 

// const Login = () => <div>Login</div>;

// const Signup = () => <div>Signup</div>;

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    const { posts } = this.props;
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
          {/* if we dont give path then 404 gets rendered */}
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
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);
