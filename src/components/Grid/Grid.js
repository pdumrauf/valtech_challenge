import { useEffect, useState } from "react"
import './Grid.css'
import Card from '../Card/Card.js'

const Grid = () => {
  const [countries, setCountries] = useState([])

  const getData = async () => {
    const data = await fetch('https://mocki.io/v1/b8944a36-3f4a-4ade-a02e-9401bcd50424')
    const countriesRes = await data.json()
    setCountries(countriesRes)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <main className="card__grid">
        <Card 
          isBanner 
          title="valtech_" 
          subtitle='front-End' 
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' 
          backgroundImg={'/assets/valtech_logo.jpg'}
        />
        {
          countries.map(country => (
            <Card 
              key={country.id} 
              title={country.city} 
              subtitle={country.country} 
              description={country.description} 
              backgroundImg={country.imgUrl}
            />
          ))
        }
      </main>
      <footer>
        <p style={{textAlign: "center"}}>by Paula Dumrauf</p>
      </footer>
    </>
  )
}

export default Grid
