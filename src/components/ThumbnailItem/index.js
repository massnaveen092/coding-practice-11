import './index.css'

const ThumbnailItem = props => {
  const {imagedetails, activeId, setActiveThumbnailId} = props
  const {thumbnailUrl, imageAltText, id} = imagedetails
  const thumbnailClassname = activeId ? 'thumbnail active' : 'thumbnail'

  const isButtonClicked = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li>
      <button type="button" onClick={isButtonClicked}>
        <img
          src={thumbnailUrl}
          alt={imageAltText}
          className={thumbnailClassname}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
