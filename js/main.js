const url = 'https://superheroapi-m1.herokuapp.com/heroes/';

// Main API call
async function getHeroes() {
  const response = await fetch(url);
  const heroesJSON = await response.json();
  return Promise.all(heroesJSON);
}

// Get super hero Power
async function getHeroPowerStats(id) {
  let heroesArr = await getHeroes();
  for (let i = 0; i < heroesArr.length; i++) {
    if (id === heroesArr[i].id) {
      let stats;
      stats =
        heroesArr[i].powerstats.intelligence +
        heroesArr[i].powerstats.strength +
        heroesArr[i].powerstats.speed +
        heroesArr[i].powerstats.durability +
        heroesArr[i].powerstats.power +
        heroesArr[i].powerstats.combat;
      return stats;
    }
  }
}

// Get super hero name
async function getHeroName(id) {
  let heroesArr = await getHeroes();
  for (let i = 0; i < heroesArr.length; i++) {
    if (id === heroesArr[i].id) {
      return heroesArr[i].name;
    }
  }
}

// Get super hero Image
async function getHeroImage(id) {
  let heroesArr = await getHeroes();
  for (let i = 0; i < heroesArr.length; i++) {
    if (id === heroesArr[i].id) {
      return heroesArr[i].images.lg;
    }
  }
}

async function getNameImg(id) {
  let heroesArr = await getHeroes();

  const card = document.querySelector('#heroes')
  
  for (let i = 0; i < heroesArr.length; i++) {
    if (id === heroesArr[i].id) {
      card.innerHTML = " "
      const info = document.createElement('div')
      info.innerHTML = 
      `<h1 class="innerH1">${heroesArr[i].name}</h1> 
        <img class="innerImage" src='${heroesArr[i].images.lg}'>`
      card.appendChild(info)

      //return heroesArr[i].name + " " + heroesArr[i].images.lg;
    }
  }
}

getHeroName();
getHeroPowerStats();
/*
async function printDc() {
  let dcArr = [];
  dcArr[0] = await getHeroImage(70);
  dcArr[1] = await getHeroImage(644);
  dcArr[2] = await getHeroImage(720);
  dcArr[3] = await getHeroImage(263);
  dcArr[4] = await getHeroImage(38);
  dcArr[5] = await getHeroImage(298);
  dcArr[6] = await getHeroImage(165);
  dcArr[7] = await getHeroImage(103);
  dcArr[8] = await getHeroImage(216);
  dcArr[9] = await getHeroImage(643);
  dcArr[10] = await getHeroImage(194);
  console.log(dcArr);
}
async function printMarvel() {
  let marvelArr = [];
  marvelArr[0] = await getHeroImage(346);
  marvelArr[1] = await getHeroImage(149);
  marvelArr[2] = await getHeroImage(659);
  marvelArr[3] = await getHeroImage(620);
  marvelArr[4] = await getHeroImage(332);
  marvelArr[5] = await getHeroImage(703);
  marvelArr[6] = await getHeroImage(107);
  marvelArr[7] = await getHeroImage(697);
  marvelArr[8] = await getHeroImage(251);
  marvelArr[9] = await getHeroImage(313);
  marvelArr[10] = await getHeroImage(579);
  marvelArr[10] = await getHeroImage(106);
  marvelArr[10] = await getHeroImage(30);
  //console.log(marvelArr);
}
*/







