function GetDescription(setDescricaoEpisodio){
    
    let chave_acesso = "20e75b947a1909b99b242724438ed46dad9576b1";

    fetch(
        `https://api.spreaker.com/v2/me?oauth2_access_token=` + chave_acesso
    )
    .then((response) => response.json())
    .then((dados) => {
        
        return dados;
    })

    .then((dados) => {
            fetch(
                    `https://api.spreaker.com/v2/users/` +
                    dados.response.user.user_id +
                    `/shows`
                )
                .then((response) => response.json())
                .then((podcasts) => {        
                    return podcasts;
                })
                .then((podcasts) => {
                    let tamanho = podcasts.response.items.length;
                    var lista_temporaria_programas = [];
                    var lista_programas = [];

                    for(var i = 0; i < tamanho; i++){
                        if(podcasts.response.items[i].title != "Rádio UFRJ - Informação & Conhecimento"){
                            if(podcasts.response.items[i].last_episode_at != null){
                                fetch(`https://api.spreaker.com/v2/shows/`+ podcasts.response.items[i].show_id)
                                .then((response)=>response.json())                 
                                .then((shows)=>{
                                    
                                    //lista_programas.push(shows)
                                    lista_programas.push({
                                        show_id:shows.response.show.show_id,
                                        title: shows.response.show.title,
                                        datacao_filtrada: new Date(shows.response.show.last_episode_at.split(' ')[0]),
                                        descricao: shows.response.show.description,
                                        image_url: shows.response.show.image_url})
        
                                })
                                
                                
                            }
                        }
                    }
                    //lista_programas.push({response:{show:lista_temporaria_programas}})
                    //console.log(lista_programas)
                    
                    setDescricaoEpisodio(lista_programas)
                });
        
                
            })


    
     
 }
 

 
 export default GetDescription