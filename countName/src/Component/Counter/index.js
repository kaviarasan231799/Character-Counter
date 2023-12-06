import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import Count from '../Count'
import './index.css'

class Counter extends Component {
  state = {countInput: '', countList: []}

  onChangeInput = event => {
    this.setState({countInput: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {countInput} = this.state
    const countLength = countInput.length
    const newCharacter = {
      id: uuidV4(),
      name: countInput,
      countLength,
    }
    this.setState(prevState => ({
      countInput: '',
      countList: [...prevState.countList, newCharacter],
    }))
  }

  render() {
    const {countInput, countList} = this.state
    const nameLength = countList.length
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="first-card">
            <h1 className="para">
              Count the Characters like a <br />
              Boss...
            </h1>
            <ul className="un-order-list">
              {nameLength > 0 ? (
                countList.map(eachItem => (
                  <Count key={eachItem.id} Detail={eachItem} />
                ))
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="img-input"
                />
              )}
            </ul>
          </div>
          <div className="second-card">
            <h1 className="heading-counter">Character Counter</h1>
            <form className="form-container" onSubmit={this.submitForm}>
              <input
                type="text"
                placeholder="Enter the Characters here"
                className="input-box"
                value={countInput}
                onChange={this.onChangeInput}
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
