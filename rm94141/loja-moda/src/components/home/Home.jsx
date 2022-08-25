import React from 'react'

export default function Home() {
    
    const home = {
        backgroundColor : '#000',
        height : '85vh',
        textAlign : 'center',
        color : 'aqua'
    }

  return (
    <div style={home}>
        <h1>Página principal</h1>
        <p>Exemplo da página principal do projeto.</p>
    </div>
  )
}