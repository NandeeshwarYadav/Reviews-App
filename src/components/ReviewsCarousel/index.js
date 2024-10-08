// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {userIndex: 0}

  onrightClick = () => {
    const {userIndex} = this.state
    const {reviewsList} = this.props

    if (userIndex >= reviewsList.length - 1) {
      this.setState({userIndex: reviewsList.length - 1})
    } else {
      this.setState(prevState => ({userIndex: prevState.userIndex + 1}))
    }
  }

  onLeftClick = () => {
    const {userIndex} = this.state
    const {reviewsList} = this.props

    if (userIndex <= 0) {
      this.setState({userIndex: 0})
    } else {
      this.setState(prevState => ({userIndex: prevState.userIndex - 1}))
    }
  }

  render() {
    const {userIndex} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[userIndex]
    return (
      <div className="bg">
        <div>
          <h1 className="heading">Reviews</h1>
          <img src={imgUrl} className="profile" alt={username} />
          <div className="buttons">
            <button
              className="button"
              type="button"
              onClick={this.onLeftClick}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
                alt="left arrow"
              />
            </button>
            <button
              className="button"
              type="button"
              onClick={this.onrightClick}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                alt="right arrow"
              />
            </button>
          </div>
          <p className="username">{reviewsList[userIndex].username}</p>
          <p>{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
