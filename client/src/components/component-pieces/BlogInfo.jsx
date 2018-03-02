import React, { Component, Fragment } from "react";
import Blog from "../component-pieces/BlogView";

class BlogInfo extends Component{
    constructor(props){
        super(props);

        this.state = ({ blogInfo: {} });

        // console.log(this.props.match.params.id);
    }

    componentDidMount(){
        fetch(`/api/blogs/${this.props.match.params.id}`)
        .then((response) => {
            response.json()
            .then((data) => {
                console.log(data);
                this.setState({blogInfo: data});
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render(){
        console.log("blog info", this.state);
        return(
            <Fragment>
                <h5 className="info-id">{this.state.blogInfo.id}</h5>
                {/* <h2 className="info-title">{this.state.blogInfo.title}</h2>
                <p className="info-content">{this.state.blogInfo.content}</p>
                <h6 className="info-time-stamp">{this.state.blogInfo._created}</h6> */}
                <Blog blogContent={this.state.blogInfo.content} title={this.state.blogInfo.title} timeStamp={this.state.blogInfo._created}/>

            </Fragment>
            
        );
    }
}

export default BlogInfo;