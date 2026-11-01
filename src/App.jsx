import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);
  const [search,setSearch]=  useState("");
  const performSearch= countries.filter((country)=>
    country.name.toLowerCase().includes(search.trim().toLowerCase()))
  useEffect(() => {
    fetch('https://xcountries-backend.labs.crio.do/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`)
        }
        return response.json()
      })
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])
   
  const containerStyle ={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    gap:"20px",
    padding:"20px"

  }
  return (
    <>
      <h1>Country wise Flage and Name</h1>
      <input
        type='text'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder='Enter country name'
      />
      <div className='countryCard' style={containerStyle}>
        {performSearch.map((country) => (
          <div className='country-card' key={country.abbr}>
            <img className='country-flag' src={country.flag} alt={`${country.name} flag`} />
            <h2>{country.name}</h2>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
