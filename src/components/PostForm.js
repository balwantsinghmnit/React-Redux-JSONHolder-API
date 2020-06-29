import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {createPost} from "../actions/postActions";

class PostForm extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            title:"",
            body:""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    onSubmit(e)
    {
        e.preventDefault();
        const post = {
            title:this.state.title,
            body:this.state.body
        };
        this.props.createPost(post);
    }
    render() {
        return (
            <div style={{marginTop:"50px"}}>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.onChange} /><br/><br/>
                    <textarea placeholder="Body" name="body" value={this.state.body} onChange={this.onChange}></textarea><br/><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
PostForm.propTypes = {
    createPost:PropTypes.func.isRequired
};
export default connect(null,{createPost})(PostForm);
