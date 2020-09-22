function findLyrics (artist, song) {
    return fetch (`https://api.lyrics.ovh/v1/${artist}/${song}`)
}

const form = document.querySelector ('#form-search');

form.addEventListener ('submit', function (evt) {
    evt.preventDefault ()

    const lyrics = document.querySelector ('#search-result')
    const artist = document.querySelector ('#input-search-artist')
    const song = document.querySelector ('#input-search-song')

    lyrics.innerHTML = '<div class="spinner-border spinner-border-sm text-primary" role="status"><span class="sr-only">Loading...</span></div>'

    findLyrics (artist.value, song.value)
        .then (response => response.json ())
        .then (data => {
            if (data.lyrics) {
                lyrics.innerHTML = data.lyrics
            } else {
                lyrics.innerHTML = data.error
            }
        })
        .catch (error => {
            return lyrics.innerHTML = `<div id="msg-error">Erro na busca. Tente novamente</div>`
            console.log (error)
        })
})

/*const url2 = `https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&art=Lady%20Gaga&mus=Alejandro&extra=relmus`

const teste = document.querySelector ('#teste')

    fetch(url2)
    .then(response => response.json ())
    .then(data => {
        teste.innerHTML = data.mus[0].text
       console.log(data.mus[0].text) 
    })*/ // API vagalume

    const CPFsemFormatar = 'O CPF é 40843562803'

    const CPFFormatado = CPFsemFormatar.replace ('40843562803', '408.435.628-03')

    console.log (CPFFormatado)



