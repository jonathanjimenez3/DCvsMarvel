const url = 'https://superheroapi-m1.herokuapp.com/heroes/';

// Main API call
async function getHeroes() {
  const response = await fetch(url);
  const heroesJSON = await response.json();
  return Promise.all(heroesJSON);
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
    }
  }
}

// Get super hero name
async function getHeroNameDC(name) {
  let heroesArr = await getHeroes();
  const searchDC = document.querySelector('#searchDC')

  const heroeName = await heroesArr.find(heroe=>{
    if (name === heroe.name && heroe.biography.publisher == "DC Comics"){
      return heroe;
    }else if(name === heroe.name && heroe.biography.publisher == "Superman Prime One-Million"){
      return heroe;
    }
  })
  const mostrarHeroe = document.createElement('div')
  searchDC.innerHTML= " "
  mostrarHeroe.innerHTML = `<h1 class="innerH1">${heroeName.name}</h1><img class="innerImg" src="${heroeName.images.md}">`
  searchDC.appendChild(mostrarHeroe)
}

async function getHeroNameMarvel(name) {
  let heroesArr = await getHeroes();
  const searchMarvel = document.querySelector('#searchMarvel')

  const heroeName = await heroesArr.find(heroe=>{
    if (name === heroe.name && heroe.biography.publisher == "Marvel Comics"){
      return heroe;
    }else if(name === heroe.name && heroe.biography.publisher == "Rune King Thor"){
      return heroe;
    }
  })
  const mostrarHeroe = document.createElement('div')
  searchMarvel.innerHTML= " "
  mostrarHeroe.innerHTML = `<h1 class="innerH1">${heroeName.name}</h1><img class="innerImg" src="${heroeName.images.md}">`
  searchMarvel.appendChild(mostrarHeroe)
}



async function insertHeroPowerStats(id) {
  let heroesArr = await getHeroes();
  //const pw = document.querySelector('#heroes-pw')
  const pwThor = document.querySelector('#heroes-pw-thor')
  const pwBatman = document.querySelector('#heroes-pw-batman')
  const pwSpiderman = document.querySelector('#heroes-pw-spiderman')
  const pwIronman = document.querySelector('#heroes-pw-ironman')
  const pwAquaman = document.querySelector('#heroes-pw-aquaman')
  const pwAntman = document.querySelector('#heroes-pw-antman')
  const pwWonder = document.querySelector('#heroes-pw-wonder')
  const pwFalcon = document.querySelector('#heroes-pw-falcon')
  const pwSuperman = document.querySelector('#heroes-pw-superman')
  const pwFlash = document.querySelector('#heroes-pw-flash')
  const pwGreen = document.querySelector('#heroes-pw-green')
  const pwCat = document.querySelector('#heroes-pw-cat')
  const pwBlackLigth = document.querySelector('#heroes-pw-blackLight')
  const pwDeathstroke = document.querySelector('#heroes-pw-deathstroke')
  const pwSupergirl = document.querySelector('#heroes-pw-supergirl')
  const pwCyborg = document.querySelector('#heroes-pw-cyborg')
  const pwCapitan = document.querySelector('#heroes-pw-capitan')
  const pwHulk = document.querySelector('#heroes-pw-hulk')
  const pwWarMachine = document.querySelector('#heroes-pw-warMachine')
  const pwBlackWidow = document.querySelector('#heroes-pw-blackWidow')
  const pwVision = document.querySelector('#heroes-pw-vision')
  const pwHawkeye = document.querySelector('#heroes-pw-hawkeye')
  const pwScarlet = document.querySelector('#heroes-pw-scarlet')
  const pwBlackPanther = document.querySelector('#heroes-pw-blackPanther')

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
        pwSpiderman.innerHTML = " "
        pwIronman.innerHTML = " "
        pwAquaman.innerHTML = " "
        pwAntman.innerHTML = " "
        pwWonder.innerHTML = " "
        pwFalcon.innerHTML = " "
        pwSuperman.innerHTML = " "
        pwFlash.innerHTML = " "
        pwGreen.innerHTML = " "
        pwCat.innerHTML = " "
        pwBlackLigth.innerHTML = " "
        pwDeathstroke.innerHTML = " "
        pwSupergirl.innerHTML = " "
        pwCyborg.innerHTML = " "
        pwCapitan.innerHTML = " "
        pwHulk.innerHTML = " "
        pwWarMachine.innerHTML = " "
        pwBlackWidow.innerHTML = " "
        pwVision.innerHTML = " "
        pwHawkeye.innerHTML = " "
        pwScarlet.innerHTML = " "
        pwBlackPanther.innerHTML = " "


        const infoPw = document.createElement('div')

        // pw.innerHTML = 
        // `<h1 class="innerPw"> The power of ${heroesArr[i].name} is ${stats}</h1>`
        // pw.appendChild(infoPw)

        pwIronman.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwIronman.appendChild(infoPw)

        pwThor.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwThor.appendChild(infoPw)

        pwBatman.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwBatman.appendChild(infoPw)

        pwSpiderman.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwSpiderman.appendChild(infoPw)

        pwAquaman.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwAquaman.appendChild(infoPw)

        pwAntman.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwAntman.appendChild(infoPw)

        pwWonder.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwWonder.appendChild(infoPw)

        pwFalcon.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwFalcon.appendChild(infoPw)
        
        pwSuperman.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">DC comics<br>PW: ${stats}</p>`
        pwSuperman.appendChild(infoPw)

        pwFlash.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwFlash.appendChild(infoPw)
        
        pwGreen.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwGreen.appendChild(infoPw)

        pwCat.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwCat.appendChild(infoPw)
        
        pwBlackLigth.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwBlackLigth.appendChild(infoPw)

        pwDeathstroke.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwDeathstroke.appendChild(infoPw)
        
        pwSupergirl.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwSupergirl.appendChild(infoPw)
        
        pwCyborg.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwCyborg.appendChild(infoPw)
        
        pwCapitan.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwCapitan.appendChild(infoPw)
        
        pwHulk.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwHulk.appendChild(infoPw)
        
        pwWarMachine.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwWarMachine.appendChild(infoPw)
        
        pwBlackWidow.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwBlackWidow.appendChild(infoPw)

        pwVision.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwVision.appendChild(infoPw)

        pwHawkeye.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwHawkeye.appendChild(infoPw)
        
        pwScarlet.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwScarlet.appendChild(infoPw)
        
        pwBlackPanther.innerHTML = `<h1 class="innerH1">${heroesArr[i].name}</h1><p class="innerText">${heroesArr[i].biography.publisher}<br>PW: ${stats}</p>`
        pwBlackPanther.appendChild(infoPw)
    }
  }
}

