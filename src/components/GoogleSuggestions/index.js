// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {inputSearch: ''}

  searchInputValue = event => {
    this.setState({inputSearch: event.target.value})
  }

  enterText = text => {
    this.setState({inputSearch: text})
  }

  render() {
    const {inputSearch} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachList =>
      eachList.suggestion.toLowerCase().includes(inputSearch.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
        </div>
        <div className="main-section">
          <div className="search-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-image"
            />
            <input
              placeholder="Search Google"
              className="input-container"
              type="search"
              onChange={this.searchInputValue}
              value={inputSearch}
            />
          </div>
          <ul>
            {searchResults.map(eachItem => (
              <SuggestionItem
                eachItem={eachItem}
                key={eachItem.id}
                changeText={this.enterText}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
