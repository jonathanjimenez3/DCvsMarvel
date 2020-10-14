const url = 'https://superheroapi-m1.herokuapp.com/heroes/';

// Main API call
async function getHeroes() {
  const response = await fetch(url);
  const heroesJSON = await response.json();
  return Promise.all(heroesJSON);
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


async function insertHeroPowerStats(id) {
  let heroesArr = await getHeroes();
  //const pw = document.querySelector('#heroes-pw')
  const pwThor = document.querySelector('#heroes-pw-thor')
  const pwBatman = document.querySelector('#heroes-pw-batman')

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

        //pw.innerHTML = " "
        pwThor.innerHTML = " "
        pwBatman.innerHTML = " "
        const infoPw = document.createElement('div')

        // pw.innerHTML = 
        // `<h1 class="innerPw"> The power of ${heroesArr[i].name} is ${stats}</h1>`
        // pw.appendChild(infoPw)

        pwThor.innerHTML = 
        `<h1 class="innerH1"> The power of ${heroesArr[i].name} is ${stats}</h1>`
        pwThor.appendChild(infoPw)

        pwBatman.innerHTML = 
        `<h1 class="innerH1"> The power of ${heroesArr[i].name} is ${stats}</h1>`
        pwBatman.appendChild(infoPw)


    }
  }
}


/*
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
*/

