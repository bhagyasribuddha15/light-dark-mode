// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickedButton = () => {
    this.setState(prevSate => ({isDarkMode: !prevSate.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const buttonMode = isDarkMode ? 'LightMode' : 'DarkMode'
    const headChange = isDarkMode ? 'dark-mode' : 'light-mode'

    return (
      <div className="app-container">
        <div className={`container ${headChange}`}>
          <h1 className="heading">Click to change Mood</h1>
          <button
            type="button"
            className="button"
            onClick={this.onClickedButton}
          >
            {buttonMode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
