import { useState } from "react"

const Card = ({ isBanner, title, subtitle, description, backgroundImg }) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const showText = () => {
    return (
      <>
        <p className="card__subtitle">{subtitle}</p>
        {
          isBanner
          ? <h1>{title}</h1> 
          : <h2>{title}</h2>
        }
      </>
    )
  }

  return (
    <div className="card__container">
      <div className="card__background" style={{backgroundImage: `url(${backgroundImg})`}}></div>
      <div className="card__text">
        <div
          className="card__hover"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovering ? (
            <>
              {showText()}
              <p>{description}</p>
              <button>View</button>
            </>
            ) : showText()
          }
        </div>
      </div>
    </div>
  )
}

export default Card