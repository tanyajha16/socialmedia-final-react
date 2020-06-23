import React, { Component } from 'react';
import PostsList from './PostsList';
// import {PostList } from './';
class Home extends Component {
  render() {
      const {posts} = this.props;
    //   console.log("this is home porps",this.props);
    return(
         <div className ="home">
            <PostsList  posts={posts}/>
         </div>
    );
  }
}
export default Home;
