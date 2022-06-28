const main = document.querySelector('main')
const divTudo = document.querySelector('.all')
const divImgs = document.getElementById('imagens')
const imgGato = document.getElementById('imgCat')
const imgDog = document.getElementById('imgDog')
const divBotoes = document.getElementById('botoes')
const buttonCat = document.getElementById('buttonCat')
const buttonDog = document.getElementById('buttonDog')
divImgs.append(imgGato, imgDog)
divTudo.append(divImgs, divBotoes)
main.append(divTudo)

buttonCat.addEventListener('click', ()=>{ 
    fetch("https://api.thecatapi.com/v1/images/search")
  .then((responseObject) => {
   return responseObject.json()
  }).then((responseObject) => { 
    imgGato.src = responseObject[0].url
  })
})

buttonDog.addEventListener('click', () =>{ 
    fetch("https://api.thedogapi.com/v1/images/search")
    .then((responseObject) => { 
        return responseObject.json()
    }).then((responseObject) => { 
        imgDog.src = responseObject[0].url
    })
})




