import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://xcountries-backend.labs.crio.do/all')
      .then((response) => response.json())
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
  const ImageStyle ={
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    width:"100px",
    height:"100px"
  }

  return (
    <>
    <h1>Country wise Flage and Name</h1>
     <div style ={containerStyle}>
      {countries.map((country) => (
        <div key={country.abbr} className={ImageStyle}>
          <img src={country.flag} alt={country.name} />
          <h2>{country.name}</h2>
        </div>
      ))}
     </div>

     

    
    </>
  )
}

export default App
