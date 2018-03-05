import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function BlogEditBox(props){
    return(
        <Fragment>
            <p>{props.content}</p>
            <form className="border-bottom border-secondary mr-5 mb-2">
                <div className="input-group">
                    <textarea name="" id="content-input" cols="30" rows="10" className="col-12 mb-3 form-control" placeholder="Blog me"
                        onChange={props.onTextChange} required
                    ></textarea>
                </div>
            </form>
            <button className="btn btn-outline-secondary"
                    onClick={props.onBtnClick}
            >Beam me up Scotty</button>
        </Fragment>
    );
}

export default BlogEditBox;