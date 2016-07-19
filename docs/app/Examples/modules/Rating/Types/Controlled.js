import React, { Component } from 'react'
import { Rating } from 'stardust'

export default class RatingControlledExample extends Component {
  state = { rating: 0 }

  handleChange = (e) => this.setState({ rating: e.target.value })

  render() {
    return (
      <div>
        <input type='range' min={-1} max={5} value={this.state.rating} onChange={this.handleChange} />
        <br />
        <Rating rating={this.state.rating} maxRating={5} />
      </div>
    )
  }
}
