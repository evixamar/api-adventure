import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Nasa() {
  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    const URL = `https://localhost:5001/api/Picture`
    axios.get(URL).then(resp => {
      console.log({ resp })
      setNasaData(resp.data)
    })
  }, [])

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather+Sans"
        rel="stylesheet"
      />
      <h1> NASA API </h1>

      {nasaData.map((m, i) => {
        return (
          <>
            <section className="main-section">
              <img src={m.image} alt={m.title} />

              <div className="detail-section">
                <h3>{m.title}</h3>
                <p className="explanation-section">{m.description}</p>
              </div>
            </section>
          </>
        )
      })}
      <footer> Made with 💛 by Manny at SDG</footer>
    </>
  )
}
