import { useEffect, useState } from "react"
import Card from './Card'

const Grid = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('hola paulita')
    getData()
  }, [])

  const getData = async () => {
    const data = await fetch('https://mocki.io/v1/ca9cfae2-cabb-4e52-ae98-955f96eb5702')
    const countriesRes = await data.json()
    setCountries(countriesRes)
  }

  return(
    <div>
      <Card isBanner title="Valtech_" subtitle='Front-End' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' backgroundImg=''/>
      {
        countries.map(item => (
          <Card key={item.id} title={item.city} subtitle={item.country} description={item.description} backgroundImg={item.imgUrl}/>
        ))
      }
    </div>
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