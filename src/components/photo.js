import React, { Component } from "react";
import PropTypes from "prop-types";
import propTypes from "prop-types";

class Photo extends Component{
  render(){
    const post = this.props.post;
    return (
      <div>
        <figure className="figure">
          <img className="photo" src={post.imageLink} alt={post.description} />
          <figcaption>
            <p>{post.description}</p>
          </figcaption>
          <div className="button-container">
            <button onClick={() => {
                this.props.onRemovePhoto(post);
              }}
            >
              {" "}
              Remove
            </button>
          </div>
        </figure>
      </div>
    );
            }
}
Photo.propTypes = {
  post: propTypes.object.isRequired,
  onRemovePhoto: propTypes.func.isRequired
}

export default Photo;
