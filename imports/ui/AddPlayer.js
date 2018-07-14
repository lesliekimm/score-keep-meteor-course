import 'babel-polyfill';
import React from 'react';

import {Players} from '../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    // cache value of playerName
    let playerName = e.target.playerName.value;

    // prevent page from refreshing
    e.preventDefault();

    // if playerName is a valid string, insert player into database
    if (playerName) {
      e.target.playerName.value = '';   // clear out value
      Players.insert({
        name: playerName,
        score: this.props.score
      });
    }
  };

  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Input player name" />
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}

AddPlayer.defaultProps = {
  score: 0
};
