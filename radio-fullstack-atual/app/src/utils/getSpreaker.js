function GetSpreaker(setDados, setListaProgramas, setProgramaNoticia) {
    let chave_acesso = "20e75b947a1909b99b242724438ed46dad9576b1";

    fetch(
            `https://api.spreaker.com/v2/me?oauth2_access_token=` + chave_acesso
        )
        .then((response) => response.json())
        .then((dados) => {
            setDados(dados.response.user)
            
            return dados;
        })
        .then((dados) => {
            if (dados.response.user.user_id != undefined) {
                
                fetch(
                        `https://api.spreaker.com/v2/users/` +
                        dados.response.user.user_id +
                        `/shows`
                    )
                    .then((response) => response.json())
                    .then((podcasts) => {
                        let tamanho = podcasts.response.items.length;
                        var lista_programas = [];
                        var lista_programas_descritos = [];
                        var programa_noticia = [];
                        for (var i = 0; i < tamanho; i++) {
                            if (
                                podcasts.response.items[i].title !=
                                "Rádio UFRJ - Informação & Conhecimento"
                            ) {
                                if (podcasts.response.items[i].last_episode_at != null) {
                                    lista_programas.push({
                                        show_id: podcasts.response.items[i].show_id,
                                        title: podcasts.response.items[i].title,
                                        datacao_filtrada: new Date(podcasts.response.items[i].last_episode_at.split(' ')[0]),
                                        last_episode_at: podcasts.response.items[i].last_episode_at,
                                        image_url: podcasts.response.items[i].image_url
                                        
                                    })
                                    fetch(`https://api.spreaker.com/v2/shows/`+podcasts.response.items[i].show_id)
                                    .then((response)=>response.json())                 
                                    .then((programas)=>{
                                        lista_programas_descritos.push({
                                            show_id: programas.response.show.show_id,
                                            title: programas.response.show.title,
                                            datacao_filtrada: new Date(programas.response.show.last_episode_at.split(' ')[0]),
                                            last_episode_at: programas.response.show.last_episode_at,
                                            image_url: programas.response.show.image_url,
                                            descricao: programas.response.show.description
                                        })
                                        
                                      
                                    })
                                
                                }
                            }  
                            else{
                                programa_noticia.push({
                                    show_id: podcasts.response.items[i].show_id,    
                                    title: podcasts.response.items[i].title,
                                    image_url: podcasts.response.items[i].image_url
                                })
                            }
                        }
                        
                        setProgramaNoticia(programa_noticia)
                        setListaProgramas(lista_programas)
                        //console.log(lista_programas)
                        //console.log(lista_programas)
                        //setListaProgramas(lista_programas_descritos)
                        //console.log(lista_programas_descritos)
                        //var jsonteste = [{0:{datacao_filtrada:'Tue Oct 29 2019 21:00:00 GMT-0300 (Horário Padrão de Brasília)'}, descricao:"A UFRJ é de todos! O 'Comunidade UFRJ' divulga os serviços da Universidade Federal do Rio de Janeiro abertos a todo mundo! Que tal conhecê-los?",  image_url: "https://d1bm3dmew779uf.cloudfront.net/large/c37fcbfa097cb1d7ef485fd24935267e.jpg",last_episode_at: "2019-10-30 18:11:51",show_id: 4122065, title: "Comunidade UFRJ", descricao:"Programa dos professores e professoras da Universidade Federal do Rio de Janeiro (UFRJ). Notícias e comentários sobre educação, ciência, cultura e política toda sexta, às 10h com reprise às 15h, pela Rádio UFRJ e em diversas plataformas de podcasting."}]
                        //setListaProgramas(jsonteste)
                    })
            }
        })
        
}


export default GetSpreaker