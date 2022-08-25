import React from 'react'

export default function Home() {
    
    const home = {
        backgroundColor : '#e6d8cb',
        height : 'auto',
        textAlign : 'center',
        color : '#e394a7',
        margin: '0px',
        padding: '50px',
        minHeight: '72vh'
    }

  return (
    <div style={home}>
        <h1>Página principal</h1>
        <p>Exemplo da página principal do projeto.</p>
    </div>
  )
}