import React, { Component } from 'react';

export class MovieCredits extends Component {
    renderCast(credits){
        return credits.map(cast => {
            return (
                <li className="moviecredits__cast" key={cast.id}>
                    <img className="moviecredits__cast-image" src={`https://image.tmdb.org/t/p/w500//${cast.profile_path}`}/>
                    <div className="moviecredits__cast-wrapper">
                        <div className="moviecredits__cast-wrapper-info">
                            <span className="moviecredits__cast-wrapper-info-name">{cast.name}</span>
                            <span className="moviecredits__cast-wrapper-info-character">{cast.character}</span>
                        </div>
                    </div>
                </li>
            )
        })
    }
    render(){
        return (
            <ul className="moviecredits">{this.renderCast(this.props.credits)}</ul>
        )
    }
}

export default MovieCredits;