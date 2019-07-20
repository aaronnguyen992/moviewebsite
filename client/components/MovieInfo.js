import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query, graphql } from 'react-apollo';

class MovieInfo extends Component {
    renderVideos(videos){
        return videos.map(video => {
            return (
                <img key={video.id} 
                     onClick={() => this.videoDisplay(video.key)} 
                     className="video_thumbs" 
                     src={`http://img.youtube.com/vi/${video.key}/0.jpg`} 
                />
            )
        })
    }
    render(){
        const id = this.props.match.params.id;
        return (
            <Query query={query} variables={{id}} >
            {
                (({loading, err, data}) => {
                    if(loading) return <div>Loading...</div>
                    return (
                        <div>
                            <header style={{backgroundImage: 'url("https://image.tmdb.org/t/p/w500///'+ data.movieInfo.poster_path+'")'}}>
                                <h2 className="title">{data.movieInfo.title}</h2>
                            </header>
                            <article className="wrapper">
                                <p className="description">{data.movieInfo.overview}</p>
                                <div className="sidebar">
                                    <img src={"https://image.tmdb.org/t/p/w500///"+data.movieInfo.poster_path} className="cover_image" alt="" />
                                    <ul>
                                        <li><strong>Genre:</strong> {data.movieInfo.genres}</li>
                                        <li><strong>Released:</strong>{data.movieInfo.release_date}</li>
                                        <li><strong>Rated:</strong> {data.movieInfo.vote_average}</li>
                                        <li><strong>Runtime:</strong> {data.movieInfo.runtime}</li>
                                        <li><strong>Production Companies:</strong> {data.movieInfo.production_companies}</li>
                                    </ul>
                                    <div className="videos">
                                        <h3>Videos</h3>
                                        {this.renderVideos(data.movieInfo.videos)}
                                    </div>
                                    {/* Reviews */}
                                </div>
                                {/* Credits */}
                            </article>
                        </div>
                    )
                })
            }
            </Query>
        )
    }
}

const query = gql`
query MovieInfo($id: String) {
    movieInfo(id: $id) {
        title
        overview
        poster_path
        genres
        release_date
        vote_average
        runtime
        production_companies
        videos {
            id
            key
        }
    }
}
`;

export default graphql(query)(MovieInfo);