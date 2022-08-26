import React from 'react'
import CortaVento from '/img/moda-masculina/corta-vento-masc.jpeg'

export default function ModaMasculina(){
    return (
        <div className='home'>
            <section>
                <h1>Moda Masculina</h1>
                <ul class="produtos">
                    <li>
                        <h2>Jaqueta</h2>
                        <img src={CortaVento} alt="Jaqueta Corta Vento Masculina"/> 
                        <p class="produto-descricao">Nike Sportswear Windrunner</p>
                        <p class="produto-preco">R$579,99</p>
                    </li>
                    <li>
                        <h2>Tênis</h2>
                        
                        <p class="produto-descricao">Nike Air Force 1 '07 LV8</p>
                        <p class="produto-preco">R$999,99</p>
                    </li>
                    <li>
                        <h2>Calça</h2>
                        
                        <p class="produto-descricao">Jogger Nike Sportswear</p>
                        <p class="produto-preco">R$349,99</p>
                    </li>
                </ul>
            </section>
        </div>
    )
}