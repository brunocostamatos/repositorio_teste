
import React from 'react'
// import { stringToHtml } from '../utils/misc'
// import { regExps } from '../routes/PageContent'

import MediaQuery from 'react-responsive'

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import Slider from "react-slick";


import{useEffect,useState} from 'react'
//import GetSpreaker from '../utils/getSpreaker.js'
import GetEpisode from '../utils/getEpisode.js'
import GetDescription from '../utils/getDescription.js'
import GetSpreaker from '../utils/getSpreaker'


import { Link } from 'react-router-dom'
import { useQuery, RenderPromises } from '@apollo/react-hooks'
import styled from 'styled-components'

import { ListScroller } from './ListScroller'
import { playerData } from '../utils/audio.js'
import Content from '../routes/PageContent.js'


// const formater = stringToHtml([...regExps, [/<a[^>]+>[^<]+<\/a>/g, '']])

const pathFunction = str => `/programas/${str}`

const CardProgramas = styled.li`
   

   .card{
      max-height: 300px;
      width: 200px;
      margin-top:30px;
   }


   .botao{
    
    padding: var(--padding) var(--padding);
    position: relative;
    
  }  
    
   article {
    margin-right: var(--padding);
    flex: 1 0 100%;
    min-width: 200px;
    max-width: 200px;
    display: flex;
    border-radius: 0.5rem;
    overflow: hidden;
    background-color: var(--color-white);
    box-shadow: 0 3px 10px 0 var(--color-black-30);
    transition: box-shadow 300ms;
    
   }
   

   .descricao{
        line-height: 1.1;
        padding: 1em;
        z-index: 99;
        color: var(--color-white);
        transform: translateY(-130%);
        background-color: rgba(51, 51, 51, 0.8);
        border-radius: 0.5rem;
        width: 160px;
        height: 160px;
                  
    }
    iframe{
      border-radius: 0.5rem;
      overflow: hidden;
      background-color: var(--color-white);
      box-shadow: 0 3px 10px 0 var(--color-black-30);
      transition: box-shadow 300ms;
      display:none;
      position: absolute;
      transform: translatex(-32%);
      margin-top:-35px;
      height:450px;
      width:900px; 
  }  
   img {
    width: 100%;
   }
   .end {
    border-radius: 2rem;
    text-transform: uppercase;
    display: flex;
    font-weight: 700;
    color: var(--color-white);
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(50%);
    transform: translatex(-20%);
    right: 1rem;
    padding: calc(var(--padding) / 3) var(--padding);
    box-sizing: border-box;
    box-shadow: 0 3px 10px 0 var(--color-black-30);
   

 }
 @media (max-width: 700px) {
   .end{
      transform: translatex(-9%);
      width: 150px;
      display:flex;
      align-items: center;
      justify-content: center;
  }


   
   .descricao{
    font-size:1.5em;
    
    transform: translateY(-120%);
   }

 }
    &:nth-of-type(even) .end {
        background: radial-gradient(
        120.97% 387.51% at 96.21% -32.89%,
        #00a47a 1.49%,
        #00a47a 1.73%,
        #009aa3 36.74%,
        #2790b9 65.93%,
        #3b88c3 87.86%,
        #4085c6 100%
        );
    }
    &:nth-of-type(odd) .end {
        background: radial-gradient(
        120.97% 387.51% at 96.21% -32.89%,
        #bb5a73 1.49%,
        #d55c5b 44.35%,
        #e55d48 80.15%,
        #eb5d40 100%
        );
    }
    &:first-of-type .end {
        background: radial-gradient(
        120.97% 387.51% at 96.21% -32.89%,
        #bb5a73 0%,
        #bcacd5 28.36%,
        #bcacd4 28.53%,
        #84aeb5 53.99%,
        #45aa97 75.22%,
        #00a682 91.17%,
        #00a47a 100%
        );
    }
    &:last-of-type {
        margin-right: 0;
     }
`



export function ProgramasPagInterna({setEstado, setId, breakPoint}) {

   const [podcast, setPodcast] = useState([])
   const [dados, setDados] = useState([])
   const [userID, setUserID] = useState([])
   const [listaProgramas, setListaProgramas] = useState([])
   const [programaNoticia, setProgramaNoticia] = useState([])
   const [listaEpisodios, setListaEpisodios] = useState([])
   const [listaNoticias, setListaNoticias] = useState([])
   const [descricaoEpisodio, setDescricaoEpisodio] = useState([])
   
   
   
   useEffect(() => {
      GetSpreaker(setDados, setListaProgramas, setProgramaNoticia)
      //GetEpisode(4119263, setPodcast,setListaNoticias, 0)
      GetDescription(setDescricaoEpisodio)
      
    }, []);
    
    //console.log(listaProgramas)
    listaProgramas.sort((a, b) => b.datacao_filtrada - a.datacao_filtrada)
    //console.log("LISTA PROGRAMAS ORDENADA",listaProgramas)
    
    
    function player(id)
    {
      setEstado('block')
      setId(id)
      
    }
    
   function Card({programa,size}) {
      const [est, setEst] = useState('none') 
      const [descri, setDescri] = useState('Carregando...')
            

    return <CardProgramas size={size}>
         <div className="card">    
         <article>
            <img alt="Avatar"  onMouseOver={()=>{
              GetEpisode(programa.show_id, 0,setListaEpisodios);
              descricaoEpisodio.map((conteudo)=>{if(conteudo.show_id == programa.show_id){setDescri(conteudo.descricao.substring(0,90))}});
              setEst('block')
              
              }} src={programa.image_url}/>
         </article>

         <div className="botao">
            <span onClick={()=>player(programa.show_id)} className="end">
                 <span>Ouvir</span>
            </span>
          
         </div>

         <div className="fundoP"
            style={{
               display: est,
               height:0
                 }}
           >
           <p className="descricao">{descri} 
           <br/>
           <span onClick={()=>player(programa.show_id)}>
                 <span>[Saiba+]</span>
            </span>
           </p>
         </div>
         </div>  
     </CardProgramas>
     
     
  }
  // configurações do slider
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
     
      <div
        
        style={{ 
        display: "flex",
        height: "50px",
        width: "50px",
        transform:" translateY(-1282%)",
        marginLeft: "91%",
        backgroundColor:"var(--color-white)",
        borderRadius: " 0rem 0.5rem 0.5rem 0rem ",
        alignItems: "center",
        boxShadow: "0 3px 10px 0 var(--color-black-30)",
        transition: "box-shadow 300ms",
        hover:"background-color: var(--color-blue)"
       }}
        onClick={onClick}
        
      >
      <FaChevronRight size ="25"color="var(--color-blue)" style={{marginLeft: "28%"}}/>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      
      <div className="direita"
        
        style={{ 
        display: "flex",
        alignItems: "center",
        height: "50px",
        width: "50px",
        transform:" translateY(-10%)",
        marginLeft: "85.39%", 
        backgroundColor:"var(--color-white)",
        borderRadius: "0.5rem 0rem 0rem 0.5rem",
        boxShadow: "0 3px 10px 0 var(--color-black-30)",
        transition: "box-shadow 300ms"
        }}
        onClick={onClick} 
      >
      <FaChevronLeft size ="25"color="var(--color-blue)" style={{marginLeft: "19%"}}/>
      </div>
    );
  }


  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "15px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          infinite: true,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: false,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots:false
        }
      }
    ]
   
  }



   if (dados == []) return null
   
   if (listaProgramas.length == 0) return null
   if (listaProgramas.length != 0) {
      

         return (
          <div className="slider">
          <h2 className="titulo">Programas</h2>
          <div className="fundoSetas"></div>
          <Slider {...settings}>
            {listaProgramas.map((conteudo) => {
               return( 
               <Card programa={conteudo}/>
               )
               
            }, console.log(listaProgramas[3])) }
          </Slider>
       </div>
         );
       }
   
   
   
   
}

ProgramasPagInterna.defaultProps = {
  breakPoint: 701
}

export default ProgramasPagInterna