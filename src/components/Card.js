import { useState, useMemo } from "react"

const Card = ({ isBanner, title, subtitle, description, backgroundImg }) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const hoverClass = useMemo(() => {
    return isHovering && !isBanner ? '-is-hovering' : ''
  }, [isHovering, isBanner])

  const TextContent = useMemo(() => {
    return (
      <div className={`card__header ${hoverClass}`}>
        <p className="card__subtitle">{subtitle}</p>
        {
          isBanner ? 
          <>
            <h1>{title}</h1>
            <p>{description}</p> 
          </>
          : <h2>{title}</h2>
        }
      </div>
    )
  }, [title, subtitle, description, isBanner, hoverClass])

  return (
    <div className="card">
      <img src={`${backgroundImg}`} alt='card background' />
      <div 
        className="card__content"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {TextContent}
        <div className={`card__description ${hoverClass}`}>
          {
            !isBanner && 
            <>
              <p>{description}</p>
              <button>View More</button>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Card