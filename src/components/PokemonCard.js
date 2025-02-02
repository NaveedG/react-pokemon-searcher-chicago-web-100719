import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super()
    this.state = { 
      toggle: true 
    }
  }

  handleToggle = () => {
    this.setState({ toggle: !(this.state.toggle) })
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleToggle}>
          <div className="image">
            { this.state.toggle ?
            <img src={this.props.pokemon.sprites.front} alt="oh no!" /> :
            <img src={this.props.pokemon.sprites.back} alt="oh no!" />
            }
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[0].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
