import React, { Component } from 'react';
import Card from './Card.js'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    $.ajax({
      method: "GET",
      url: "/api/lists/" + this.props.id + "/cards",
      contentType: "application/json"
    })
    .done(data => {
      this.setState({ cards: data.cards });
    });
  }

  render() {
    let cards = this.state.cards.map(card => {
      return(
        <Card
          id={card.id}
          key={card.id}
          text={card.text}
        />
      );
    });

    return(
      <ul>
      {this.props.title}
      {cards}
      </ul>
    );
  };
};

export default List;
