// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachItem, changeText} = props
  const {suggestion} = eachItem
  const enterTextChange = () => {
    changeText(suggestion)
  }
  return (
    <li>
      <p>{suggestion}</p>
      <button type="button" onClick={enterTextChange}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
