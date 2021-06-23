import React, { Component } from "react";
import Photo from "./photo";
import propTypes from "prop-types";
import {Link} from 'react-router-dom'
class PhotoWall extends Component {
  render(){
 return (
   <div className="justify-left">
      <div className="photo-grid">
        <Link className="addIcon" to="/AddPhoto"> </Link>
        {this.props.posts
        .sort(function(x,y){
          return y.id - x.id
        })
        .map((post, index) => (
          <Photo
            key={index}
            post={post}
            onRemovePhoto={this.props.onRemovePhoto}
          />
        ))}
      </div>
    </div>
    );
}
}
PhotoWall.propTypes = {
    posts: propTypes.array.isRequired,
    onRemovePhoto: propTypes.func.isRequired
}
export default PhotoWall;

/*


    */
