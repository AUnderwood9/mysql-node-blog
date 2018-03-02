import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Blog from "../component-pieces/BlogView";
import BlogInputs from "../component-pieces/BlogInputs";

class Home extends Component{
    constructor(props){
        super(props)

        this.state = { blogList: [] };
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

        console.log(this.state);
        return(
            <div className="row">
                <section id="blog-list" className="col-6">
                    {/* <h1>Blog List</h1> */}
                        {
                            this.state.blogList.map((item,index) => {
                                console.log(item.title, item.content, item._created);
                                return (
                                    <Fragment key={`blog-listing-${index}`}>
                                        <Blog blogContent={item.content} title={item.title} timeStamp={item._created}/>
                                        <Link to={`/${item.id}`}>Get my Info</Link>
                                    </Fragment>
                                );
                            })
                        }
                    {/* <Blog /> */}
                </section>

                <section id="inputs" className="col-4">
                        <BlogInputs />
                </section>
            </div>
        );
    }

}

export default Home;