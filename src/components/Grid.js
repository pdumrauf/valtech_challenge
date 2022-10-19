import { useEffect, useState } from "react"
import Card from './Card'
import image from '../../src/valtech_logo.jpg'

const Grid = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await fetch('https://mocki.io/v1/ca9cfae2-cabb-4e52-ae98-955f96eb5702')
    const countriesRes = await data.json()
    setCountries(countriesRes)
  }

  return(
    <>
    <section className="grid__cards">
      <div className="card__banner">
        <Card isBanner title="valtech_" subtitle='front-End' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' backgroundImg={image}/>
      </div>
      {
      countries.map(country => (
        <Card key={country.id} title={country.city} subtitle={country.country} description={country.description} backgroundImg={country.imgUrl}/>
      ))
      }
      
    </section>
    <p style={{textAlign: "center", marginBottom:"50px"}}>by Paula Dumrauf</p>
    </>
  )
}

export default Grid
  
/*[
{
"id": 1,
"country": "Germany",
"city": "Berlin",
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
"imgUrl": "/assets/berlin.jpg"
},
{
"id": 2,
"country": "Italy",
"city": "Venice",
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
"imgUrl": "/assets/venice.jpg"
},
{
"id": 3,
"country": "Netherlands",
"city": "Amsterdam",
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
"imgUrl": "/assets/amsterdam.jpg"
},
{
"id": 4,
"country": "France",
"city": "Paris",
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
"imgUrl": "/assets/paris.jpg"
},
{
"id": 5,
"country": "Argentina",
"city": "Buenos Aires",
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
"imgUrl": "/assets/buenosAires.jpg"
},
{
"id": 6,
"country": "Spain",
"city": "Barcelona",
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
"imgUrl": "/assets/barcelona.jpg"
}
]*/