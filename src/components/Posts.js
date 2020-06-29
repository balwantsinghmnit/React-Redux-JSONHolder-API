import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {fetchPosts,deletePost} from "../actions/postActions";

class Posts extends Component {

    componentWillMount()
    {
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps)
    {
        if(nextProps.newPost)
        {
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    deletePost = (id)=>{
        this.props.deletePost(id);
    }
    render() {
        return this.props.posts.map(post=>(
            <div style={{border:"1px solid #333",marginTop:"20px",width:"60%"}}>
                <h5>{post.title}<button onClick={()=>this.deletePost(post.id)} style={{float:"right"}}>delete</button></h5>
                <p>{post.body}</p>
            </div>
        ));
    }
}

Posts.propTypes = {
    fetchPosts:PropTypes.func.isRequired,
    deletePost:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired,
    newPost:PropTypes.object
};

const mapStateToProps = state =>({
    posts:state.posts.items,
    newPost:state.posts.item
});
export default connect(mapStateToProps,{fetchPosts,deletePost})(Posts);
