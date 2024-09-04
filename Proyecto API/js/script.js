const URL = 'https://api.thecatapi.com/v1/images/search'

//pides al mesero
fetch(URL) 
//el mesero va a la cocina
    .then(res => res.json())
    //el mesero trae el plato
    .then(data => {
        const img = document.querySelector('img')
        img.src = data[0].url
        })