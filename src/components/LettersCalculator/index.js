// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onCount = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="container1">
          <div className="con1">
            <h1 className="h1"> Calculate the Letters you enter </h1>
            <label className="label-element" htmlFor="inputElement">
              Enter the phrase
            </label>
            <input
              placeholder="Enter the phrase"
              id="inputElement"
              type="text"
              className="input-element"
              onChange={this.onCount}
            />
            <p className="button">No.of letters: {count.length}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
