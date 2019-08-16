import React, { Component } from 'react';

class MovieReviews extends Component {
    renderReviews(reviews){
        return reviews.map(review => {
            return (
                <article className="moviereviews__wrapper" key={review.id}>
                    <h4 className="moviereviews__author">{review.author} writes</h4>
                    <div className="moviereviews__content">{review.content}</div>
                </article>
            )
        })
    }
    render() {
        return (
            <div className="moviereviews">
                {this.renderReviews(this.props.reviews)}
            </div>
        )
    }
}

export default MovieReviews;