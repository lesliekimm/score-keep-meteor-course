import 'babel-polyfill';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';
import React from 'react';

import Player from './Player';

export default class PlayerList extends React.Component {
  renderPlayers() {
    if(this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">Add your first player to get started!</p>
        </div>
      )
    }
    else {
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player}/>;
      });
    }
  };

  render() {
    return (
      <div>
        <FlipMove duration={500} easing="ease-out" maintainContainerHeight="true">
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
};

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
};
