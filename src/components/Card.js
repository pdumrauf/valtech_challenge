import { useState, useMemo } from "react"

const Card = ({ isBanner, title, subtitle, description, backgroundImg }) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const TextContent = useMemo(() => {
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
  }, [title, subtitle, isBanner])

  return (
    <div className="card">
      <img src={`${backgroundImg}`} alt='card background' />
      <div className="card__text" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {isHovering ? (
            <>
              {TextContent}
              <div className="card__description">
                <p>{description}</p>
                <button>Explore More</button>
              </div>
            </>
            ) : TextContent
          }
      </div>
    </div>
  )
}

export default Card