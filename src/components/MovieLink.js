import React, { Component } from "react";

class MovieLink extends Component{
  render(){
    return (
      <div className="movie-link">
        <li><a href={this.props.url}>{this.props.name}</a></li>
      </div>
    )
  }
}

export default MovieLink;
