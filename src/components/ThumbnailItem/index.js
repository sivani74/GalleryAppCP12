// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, onSelectImage, isActive} = props
  const {thumbnailUrl, id, thumbnailAltText} = details

  const activeClassName = isActive ? 'active-btn' : ''

  const onClickThumbnail = () => {
    onSelectImage(id)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className={`button ${activeClassName}`}
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
