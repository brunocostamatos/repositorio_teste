import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

import './Sobre.css'

export function Sobre() {
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
                  <a href="#radio" className="link">
                     Sobre a Rádio UFRJ
                  </a>
               </li>
               <li>
                  <a href="#historico" className="link">
                     Histórico
                  </a>
               </li>
               <li>
                  <a href="#nrtv" className="link">
                     Núcleo de Rádio e TV da UFRJ
                  </a>
               </li>
               <li>
                  <a href="#redes" className="link">
                     Rádio UFRJ nas redes
                  </a>
               </li>
               
            </ul>
         </nav>
         <main className="conteudo">
           
            <article id="radio">
               <h1>Sobre a Rádio UFRJ</h1>
               <p>
                  A Rádio UFRJ é uma emissora educativa, multiplataforma,
                  desenvolvida no âmbito do Núcleo de Rádio e TV (NRTV) da
                  Universidade Federal do Rio de Janeiro (UFRJ). Busca oferecer
                  uma comunicação pública de qualidade, contribuindo para a
                  construção coletiva do conhecimento, a diversidade, a
                  representatividade e a inclusão de vozes e expressões
                  culturais, a democratização da comunicação e a divulgação
                  científica, tecnológica e de inovação.
               </p>
               <p>
                  A iniciativa tem, também, caráter formativo, visando promover
                  a qualificação profissional para atuação em mídia sonora, não
                  apenas de estudantes dos cursos de graduação na área de
                  Comunicação Social, mas de estudantes e servidores de todas as
                  áreas do conhecimento.
               </p>
               <p>
                  Transmitindo via internet desde outubro de 2019, a Rádio UFRJ
                  integra a recém-constituída Rede de Rádios Universitárias do
                  Brasil (RUBRA).
               </p>
            </article>
            <article id="historico">
               <h1>Histórico</h1>
               <p>
                  As demandas da UFRJ por um canal FM remontam ao fim dos anos
                  1980, quando são registradas as primeiras experiências de
                  ativismo estudantil no campo da radiodifusão, na Praia
                  Vermelha e posteriormente também no Fundão e no Instituto de
                  Filosofia e Ciências Sociais (IFCS).
               </p>
               <p>
                  Em 2012, o Ministério das Comunicações incluiu o canal 205E,
                  com limitação ao município de Paraty-RJ, no Plano Básico de
                  Distribuição de Canais de Radiodifusão Sonora em Frequência
                  Modulada. E, em 2014, através da Portaria nº 6, de 22 de
                  janeiro, finalmente o Ministério consignou à União o canal
                  205E para execução do Serviço de Radiodifusão Sonora, com fins
                  exclusivamente educativos, a ser operado pela Empresa Brasil
                  de Comunicação (EBC) em parceria com a UFRJ.
               </p>
               <p>
                  A partir daí, foi estruturado o projeto da Rádio UFRJ, que
                  contou com apoio de recursos de emendas parlamentares para sua
                  implementação. A institucionalização do NRTV visou garantir o
                  funcionamento regular em espaço permanente, com dotação
                  orçamentária, política de gestão, autonomia administrativa e
                  política de comunicação, em consonância com a perspectiva
                  transdisciplinar do Fórum de Ciência e Cultura e com os
                  objetivos maiores da Administração Central da UFRJ.
               </p>
            </article>
            <article id="nrtv">
               <h1>Núcleo de Rádio e TV da UFRJ</h1>
               <p>
                  O Núcleo de Rádio e TV (NRTV), reconhecido como órgão
                  suplementar pelo Conselho Universitário (Consuni) em 2018, é
                  uma unidade do Fórum de Ciência e Cultura (FCC) da
                  Universidade Federal do Rio de Janeiro (UFRJ). Atua de forma
                  interdisciplinar em ensino, pesquisa e extensão, com o
                  objetivo de promover atividades educativas e culturais através
                  de radiodifusão sonora e de sons e imagens, transmissão via
                  internet, em plataformas digitais, e realização de eventos.
                  Entre as suas atribuições, está o desenvolvimento de uma
                  emissora em FM, na frequência de 88,9 MHz, a ser operada em
                  parceria com a Empresa Brasil de Comunicação (EBC).
               </p>
               <p>
                  O trabalho do NRTV tem como princípios a solidariedade, a
                  equidade, a alteridade, a cidadania, a transparência, o
                  respeito à diversidade cultural, ao meio ambiente, a defesa e
                  o aprimoramento da pessoa humana, da sociedade, e a promoção
                  dos direitos humanos e valores democráticos e universais.
               </p>
               <p>
                  É responsabilidade do órgão, também, contribuir com a formação
                  em mídia sonora através de iniciativas educacionais como
                  cursos de capacitação, projetos de extensão e estágios para o
                  desenvolvimento de competências comunicacionais, bem como
                  promover a pesquisa, através da oferta de disciplinas em nível
                  de pós-graduação, e a proposição de conceitos e metodologias
                  no campo da comunicação radiofônica sonora, de sons e imagens
                  e de mídias digitais.
               </p>
               <p>
                  O NRTV tem o compromisso de promover ações locais e regionais
                  no Estado do Rio de Janeiro, bem como de âmbito nacional e
                  internacional, atuando em parceria com entidades como a Rede
                  de Rádios Universitárias do Brasil (RUBRA) e a Rede
                  Internacional Universitária (RIU), associação das associações
                  de rádios universitárias da América Latina, Caribe e Europa).
                  O NRTV busca ainda contribuir para a construção de políticas
                  públicas, na esfera dos setores de radiodifusão e audiovisual,
                  por meio de ações de âmbito teórico, experimental e prático,
                  incluindo a organização e o apoio a eventos científicos.
               </p>
            </article>
            <article id="redes">
               <h1>Rádio UFRJ nas redes</h1>
      
               <p>
                  Acompanhe a Rádio UFRJ no Instagram, Youtube e Facebook!
               </p>
               <div className="iconRedes">
               <a href="https://www.instagram.com/radio.ufrj/" target="_blank"><FaInstagram size ="45"color="var(--color-black)"/></a>
               <a href="" target="_blank"> <FiYoutube size ="45"color="var(--color-black)" /></a>
               <a href="https://www.facebook.com/radioufrj/" target="_blank"> <FaFacebook size ="45"color="var(--color-black)" /></a>
               </div>
               
            </article>
         </main>
      </section>
   )
}

export default Sobre

