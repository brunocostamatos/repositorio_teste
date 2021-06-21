import React, { useEffect, useState } from 'react';
import useFetch from './useFetch.js'

export function GetPosts() {
    fetch(
        `https://tiradioufrj.wixsite.com/api-radio/_functions/post`
    )
    .then((response) => response.json())
    .then((dados) => {
        setDados(dados.response.user)

        return dados;
    })
}

export default GetPosts