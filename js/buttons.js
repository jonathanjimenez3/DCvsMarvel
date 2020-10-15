const btnSpiderman = document.querySelector('#spiderman-btn');
const btnIronman = document.querySelector('#ironman-btn');
const btnCapitan = document.querySelector('#capitan-btn');
const btnThor = document.querySelector('#thor-btn');
const btnHulk = document.querySelector('#hulk-btn');
const btnWarMachine = document.querySelector('#warMachine-btn');
const btnBlackWidow = document.querySelector('#blackWidow-btn');
const btnVision = document.querySelector('#vison-btn');
const btnFalcon = document.querySelector('#falcon-btn');
const btnHawkeye = document.querySelector('#hawkeye-btn');
const btnScarlet = document.querySelector('#scarlet-btn');
const btnPanther = document.querySelector('#panther-btn');
const btnAnt = document.querySelector('#ant-btn');

const btnBatman = document.querySelector('#batman-btn');
const btnSuperman = document.querySelector('#superman-btn');
const btnWonder = document.querySelector('#wonder-btn');
const btnFlash = document.querySelector('#flash-btn');
const btnAquaman = document.querySelector('#aquaman-btn');
const btnGreen = document.querySelector('#green-btn');
const btnCat = document.querySelector('#cat-btn');
const btnBlackLight = document.querySelector('#black-Light-btn');
const btnDeathstroke = document.querySelector('#deathstroke-btn');
const btnSupergirl = document.querySelector('#supergirl-btn');
const btnCyborg = document.querySelector('#cyborg-btn');

function toCorrectName(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

const DC = document.querySelector('#DC')

DC.addEventListener('submit', (event) => {
    event.preventDefault()
    const DCInput = document.querySelector('#DC-input').value
    const stringOk = toCorrectName(DCInput)
    getHeroName(stringOk)})
/*
btnIronman.addEventListener('click', () => getNameImg(346))
btnBatman.addEventListener('click', () => getNameImg(70))
btnCapitan.addEventListener('click', () => getNameImg(149))
btnThor.addEventListener('click', () => getNameImg(659))
btnHulk.addEventListener('click', () => getNameImg(332))
btnWarMachine.addEventListener('click', () => getNameImg(703))
btnBlackWidow.addEventListener('click', () => getNameImg(107))
btnVision.addEventListener('click', () => getNameImg(697))
btnFalcon.addEventListener('click', () => getNameImg(251))
btnHawkeye.addEventListener('click', () => getNameImg(313))
btnScarlet.addEventListener('click', () => getNameImg(579))
btnPanther.addEventListener('click', () => getNameImg(106))
btnAnt.addEventListener('click', () => getNameImg(30))
btnSuperman.addEventListener('click', () => getNameImg(644))
btnWonder.addEventListener('click', () => getNameImg(720))
btnFlash.addEventListener('click', () => getNameImg(263))
btnAquaman.addEventListener('click', () => getNameImg(38))
btnGreen.addEventListener('click', () => getNameImg(298))
btnCat.addEventListener('click', () => getNameImg(165))
btnBlackLight.addEventListener('click', () => getNameImg(103))
btnDeathstroke.addEventListener('click', () => getNameImg(216))
btnSupergirl.addEventListener('click', () => getNameImg(643))
btnCyborg.addEventListener('click', () => getNameImg(194))
btnSpiderman.addEventListener('click', () => getNameImg(620))
*/

