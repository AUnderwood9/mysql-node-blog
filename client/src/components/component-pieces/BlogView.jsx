import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function BlogView(props){
    return(
        <div className="border-bottom border-secondary mr-5 mb-2">
            <h3 className="title">{props.title}</h3>
            <p className="blog-content">{props.blogContent}</p>
            <h6 className="time-stmap">{props.timeStamp}</h6>
        </ div>
    );
}

export default BlogView;