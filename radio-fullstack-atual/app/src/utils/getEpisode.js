function GetEpisode(PodcastID, setListaNoticias, setListaEpisodios){
    
    fetch(`https://api.spreaker.com/v2/shows/` +
                        PodcastID +
                        `/episodes?limit=5` //ESTÁ LIMITANDO PARA OS 5 PRIMEIROS EPISODIOS
    )
    .then((response)=>response.json())	
    .then((episodes) => {
        //console.log(episodes)
        return episodes;
    })
    .then((episodes)=>{
        
        
        if(episodes.response.items[0].show_id != '4119263'){
          
            let quantidade_episodios = episodes.response.items.length
            var lista_episodio=[];
          
            for(var i=0; i < quantidade_episodios; i++){

                fetch(`https://api.spreaker.com/v2/episodes/`+episodes.response.items[i].episode_id)
                    .then((response)=>response.json())
                    .then((episodio)=>{
                        
                        lista_episodio.push(episodio.response.episode)
                    })

              }


            setListaEpisodios(lista_episodio)
            console.log(lista_episodio)
        }  
        else{
            var lista_temporaria=[];
            var lista_noticias=[];
            for(var i=0; i < episodes.response.items.length; i++){
                
                fetch(`https://api.spreaker.com/v2/episodes/`+episodes.response.items[i].episode_id)
                    .then((response)=>response.json())
                    .then((episodio)=>{
                        lista_temporaria.push({
                            episodio_id: episodio.response.episode.episode_id,
                            descricao: episodio.response.episode.description,
                            audio: episodio.response.episode.playback_url,
                            titulo: episodio.response.episode.title
                        })
                    })
              }
            lista_noticias.push({response:lista_temporaria})
           //console.log("->", lista_noticias[0])
            setListaNoticias(lista_noticias[0])
          }
        
    })

   
        
    
 
}
export default GetEpisode






