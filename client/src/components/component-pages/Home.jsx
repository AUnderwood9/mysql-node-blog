import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Blog from "../component-pieces/BlogView";
import BlogInputs from "../component-pieces/BlogInputs";
import "../index.scss";
import "./Home.scss";

class Home extends Component{
    constructor(props){
        super(props)

        this.state = { blogList: [],
            title: "",
            content: "",
            tag: "" };

        this.onBlogInputChange = this.onBlogInputChange.bind(this);
        this.handleInputOnBtnClick = this.handleInputOnBtnClick.bind(this);
    }

    onBlogInputChange(event){
        // console.log(event.target.id);
        switch(event.target.id){
            case "title-input":
                // console.log("title", event.target.value);
                this.setState({title: event.target.value});
            break;
            case "content-input":
                // console.log("content", event.target.value);
                this.setState({content: event.target.value});
            break;
            case "tag-input":
                // console.log("tag", event.target.value);
                this.setState({tag: event.target.value});
            break;
        }
    }

    handleInputOnBtnClick(event){
        if(this.state.title.length < 1 || this.state.content.length < 1 || this.state.tag < 1){
            console.log("Invalid input, put something in the input fields!");
        }
        else{
            console.log("Title: ", this.state.title, "Content: ", this.state.content, "Tags: ", this.state.tag);
            fetch(`/api/blogs/`, {
                method: 'POST',
                body: JSON.stringify({title: this.state.title, content: this.state.content, tag: this.state.tag}), 
                headers: new Headers({
                  'Content-Type': 'application/json'
                })
            })
            .catch((err) => {
                res.sendStatus(400);
            });
        }
    }


    componentDidMount(){
        console.log("mounting");
        fetch(`/api/blogs/`)
        .then((response) => {
            // console.log(response.json().value());
            response.json()
            .then((data) => {
                // console.log(data);
                this.setState({blogList: data });
            })
            .catch((err) => {
                console.log(err);
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render(){
        const inputStyle = {
            position: "fixed"
        };

        let blogText;

        return(
            <div className="row homeContainer">
                <section id="blog-list" className="col-6">
                        {
                            this.state.blogList.map((item,index) => {
                                // console.log(item.title, item.content, item._created);
                                if(item.content.length > 240 && typeof item.content === 'string'){
                                    // truncate text if it is too long
                                    blogText= item.content.slice(0,240).trim() + " ...";
                                }
                                else{
                                    blogText = item.content;
                                }
                                
                                return (
                                    <Fragment key={`blog-listing-${index}`}>
                                        <Blog blogContent={blogText} title={item.title} timeStamp={item._created}/>
                                        <Link className="btn btn-sm btn-outline-secondary" to={`/${item.id}`}>Get my Info</Link>
                                    </Fragment>
                                );
                            })
                        }
                </section>

                <section id="inputs" className="col-6">
                        <BlogInputs onBlogInputChange={this.onBlogInputChange} btnHandler={this.handleInputOnBtnClick}/>
                </section>
            </div>
        );
    }

}

export default Home;