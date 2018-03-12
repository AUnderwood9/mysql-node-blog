import React, { Component, Fragment } from "react";
import Blog from "./BlogView";
import EditBox from "./BlogEditBox";

class BlogInfo extends Component{
    constructor(props){
        super(props);

        this.state = ({ blogInfo: {}, editing: false, currentEdit: "" });

        this.onEditSubmitBtnClick = this.onEditSubmitBtnClick.bind(this);
        this.onTextEdit = this.onTextEdit.bind(this);
    }

    onBlogBtnClick(event){
        fetch(`/api/blogs/${this.props.match.params.id}`, {
            method: 'DELETE'
        });

        this.props.history.push("/");
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

    onEditBtnClick(event){
        console.log(event.target);
        this.setState({editing: true});
    }

    onTextEdit(event){
        console.log(event);
        this.setState({currentEdit: event.target.value});
    }

    onEditSubmitBtnClick(event){
        if(this.state.currentEdit.length > 1){
            fetch(`/api/blogs/${this.props.match.params.id}`,{
                method: 'PUT',
                mode: 'cors', 
                redirect: 'follow',
                body: JSON.stringify({content: this.state.currentEdit}), 
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then((data) => {
                // this.setState({editing: false});
                this.props.history.push(`/`);
            })
            .catch((err) => {
                console.log(err);
            })
        }

        console.log("state, ", this.state.currentEdit);
    }

    render(){
        console.log("blog info", this.state);
        
        if(!this.state.editing){
            return(
                <Fragment>
                    <h5 className="info-id">{this.state.blogInfo.id}</h5>
                    <Blog blogContent={this.state.blogInfo.content} title={this.state.blogInfo.title} timeStamp={this.state.blogInfo._created} />
                    <button className="btn btn-sm btn-outline-secondary"
                        onClick={(event) => {this.onEditBtnClick(event)}}
                    >Edit me</button>
                    <button className="btn btn-sm btn-outline-secondary"
                        onClick={(event) => {this.onBlogBtnClick(event)}}
                    >Delete me!</button>
                </Fragment>
                
            );
        }else{
            return(
                <EditBox content={this.state.content} onBtnClick={this.onEditSubmitBtnClick} onTextChange={this.onTextEdit}/>
            );
        }
    }
}

export default BlogInfo;