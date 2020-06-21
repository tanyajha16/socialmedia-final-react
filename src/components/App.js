import React from 'react';
import PropTypes from 'prop-types';
// import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
// import PostsList from './index';
import PostsList from './PostsList';
import Navbar from './navbar';

const Login = () => <div>Login</div>;

const Signup = () => <div>Signup</div>;
const Home = () => <div>Home</div>;

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    const { posts } = this.props;
    console.log('props', this.props);
    return (
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={posts} /> */}
          {/* specyfying different routes */}
          <ul>
            <li>
              <Link to ="/">Home</Link>
              </li>
              <li>
              <Link to ="/login">Login</Link>
              </li>
              <li>
              <Link to ="/signup">Signup</Link>
              </li>
            </ul>
          <Route exact={true} path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
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
