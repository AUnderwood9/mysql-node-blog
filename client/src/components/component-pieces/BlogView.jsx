import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function BlogView(props){
    return(
        <Fragment>
            <h3 className="title">{props.title}</h3>
            <p className="blog-content">{props.blogContent}</p>
            <h6 className="time-stmap">{props.timeStamp}</h6>
        </ Fragment>
    );
}

export default BlogView;