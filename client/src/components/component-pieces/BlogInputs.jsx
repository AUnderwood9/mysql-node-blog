import React, { Fragment } from "react";



function BlogInputs(props){
    return(
        <Fragment>
            <form>
                <div className="input-group">
                    <input id="title-input" type="text" className="col-12 mb-3 form-control" placeholder="title here"
                        onChange={props.onBlogInputChange} required
                    />
                </div>
                <div className="input-group">
                    <textarea name="" id="content-input" cols="30" rows="10" className="col-12 mb-3 form-control" placeholder="Blog me"
                        onChange={props.onBlogInputChange} required
                    ></textarea>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">#</span>
                    </div>
                    <input id="tag-input" type="text" className="col-12 form-control" placeholder="#"
                        onChange={props.onBlogInputChange} required
                    />
                </div>
                <button className="btn btn-outline-secondary" type="submit"
                    onClick={props.btnHandler}
                >Beam me up Scotty</button>
            </form>
        </Fragment>
    );
}

export default BlogInputs;