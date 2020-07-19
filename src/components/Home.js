import React, { Component } from 'react';
import PostsList from './PostsList';
import FriendsList from './FriendsList';

// import {PostList } from './';
class Home extends Component {
  render() {
      const {posts,friends,isLoggedin} = this.props;
    //   console.log("this is home porps",this.props);
    return(
         <div className ="home">
            <PostsList  posts={posts}/>
            {isLoggedin && <FriendsList friends={friends} />}
         </div>
    );
  }
}
export default Home;
