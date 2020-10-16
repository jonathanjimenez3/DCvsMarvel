function toCorrectName(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

const DC = document.querySelector('#DC')
DC.addEventListener('submit', (event) => {
    event.preventDefault()
    const DCInput = document.querySelector('#DC-input').value
    const stringOkDc = toCorrectName(DCInput)
    getHeroNameDC(stringOkDc)})


const Marvel = document.querySelector('#Marvel')
Marvel.addEventListener('submit', (event) => {
    event.preventDefault()
    const MarvelInput = document.querySelector('#Marvel-input').value
    const stringOkMarvel = toCorrectName(MarvelInput)
    getHeroNameMarvel(stringOkMarvel)})
