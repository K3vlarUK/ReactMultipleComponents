import React, { Component } from "react";
import MovieLink from "./MovieLink";

class MovieList extends Component {
  render(){
    const movieNodes = this.props.data.map(movie => {
      return (
        <MovieLink name={movie.name} url={movie.url} key={movie.id} />
      );
    });

    return (
      <div className="movies">
      <ul>
      {movieNodes}
      </ul>
      </div>
    )
  }
}

export default MovieList;
