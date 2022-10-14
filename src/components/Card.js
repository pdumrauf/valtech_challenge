const Card = ({isBanner, title, subtitle, description, backgroundImg }) => {
  return (
    <div>
      <p>{subtitle}</p>
      {
        isBanner
        ? <h1>{title}</h1> 
        : <h2>{title}</h2>
      }
      <p>{description}</p>
      <img src={backgroundImg} alt={`${title}-img`} />
    </div>
  )
}

export default Card