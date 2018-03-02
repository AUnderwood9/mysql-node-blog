import React, { Fragment } from "react"

function BlogInputs(){
    return(
        <Fragment>
            <div className="input-group">
                <input type="text" className="title-input col-12 mb-3 form-control" placeholder="title here"/>
            </div>
            <div className="input-group">
                <textarea name="" id="" cols="30" rows="10" className="content-input col-12 mb-3 form-control" placeholder="Blog me"></textarea>
            </div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">#</span>
                </div>
                <input type="text" className="tag-input col-12 form-control" placeholder="#"/>
            </div>
        </Fragment>
    );
}

export default BlogInputs;