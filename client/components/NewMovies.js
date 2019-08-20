import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class NewMovies extends React.Component {
    Movies(){
        return (
            <div className="newmovies">
                <div className="newmovies__header">What's Out</div>
                <div className="newmovies__container">
                {
                    this.props.data.newMovies.map(movie => {
                        return (
                            <article key={movie.id} className="newmovies__list">
                                <Link to={"/info/"+movie.id}>
                                    <img 
                                        className="newmovies__image" 
                                        src={movie.poster_path}
                                        />
                                </Link>
                                <h1 className={"newmovies__title"}>{movie.title}</h1>
                            </article>
                        );
                    })
                }
                </div>
            </div>
        )
    }

    render(){
        if(this.props.data.loading) return <div>Loading...</div>
        return this.Movies()
    }
}

const query = gql`
{
    newMovies {
        id
        poster_path
        title
    }
}
`
export default graphql(query)(NewMovies);