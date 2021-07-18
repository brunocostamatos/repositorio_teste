import React from 'react'

import './Chamadas.css'
import CardChamadas from '../components/CardChamadas'


export function Chamadas() {
   return (
      <section className="sobre">
         <nav className="menu">
            
            <ul>
            <li>
                  <a>
                  <p className="indice">Índice</p>
                  </a>
               </li>
               <li>
                  <a href="#todos" className="link">
                     Todos
                  </a>
               </li>
               <li>
                  <a href="#abertos" className="link">
                     Abertos
                  </a>
               </li>
               <li>
                  <a href="#concluidos" className="link">
                     Concuídos
                  </a>
               </li>
               <li>
                  <a href="#tragaConteudo" className="link">
                     Traga seu Conteúdo
                  </a>
               </li>
               
            </ul>
         </nav>
         <main className="conteudo">
            <h1>Editais e comunicados</h1>
            <CardChamadas/>
        </main>
      </section>
   )
}

export default Chamadas