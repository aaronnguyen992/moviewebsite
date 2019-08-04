import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class NewMovies extends React.Component {
    state = {
        mouseHover: false
    }

    handleHover() {
        this.setState( state => ({
            mouseHover: !state.mouseHover
        }))
    }

    Movies(){
        const mouseHover = this.state.mouseHover ? 'hover' : ''

        return this.props.data.newMovies.map(movie => {
            return (
                <article key={movie.id} className="newmovies__list">
                    <Link to={"/info/"+movie.id}>
                        <img 
                            className="newmovies__image" 
                            src={movie.poster_path}
                            onMouseEnter={() => this.handleHover()} 
                            onMouseLeave={() => this.handleHover()} />
                    </Link>
                    <h1 className={`newmovies__title ${mouseHover}`}>{movie.title}</h1>
                </article>
            );
        })
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