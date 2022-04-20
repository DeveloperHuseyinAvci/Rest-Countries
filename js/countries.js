class CountryApi {
  constructor() {}
  async countryApiGet() {
    const apiData = await fetch("https://restcountries.com/v2/all")
    const dataObject = await apiData.json()


    dataObject.forEach(object => {
      //console.log(object);
      /* try{
        console.log(object.flags.svg);
      }catch(error){
        console.log(object.flags.png);
      }finally{

      } */
      // 0 indexi olmayanlara (try catch) hata kontrolü uygula patika js kursundan bakabilirsin
      const cardData = new CardContent(
        object.flags,
        object.name,
        object.population,
        object.region,
        object.capital,
        object.nativeName,
        object.subregion,
        object.topLevelDomain,
        object.currencies, // hata kontrolü uygula (try & catch)
        object.languages, // hata kontrolü uygula (try & catch)
        object.borders // hata kontrolü uygula  (try & catch)

      )
      // console.log(cardData);
    });

  }
}

CountryApi.prototype.countryApiGet()


class CardContent {
  constructor(flagImg, countryName, population, region,
    capital, nativeName, subregion, topLevelDomain, currencies,
    languages, borders) {

    this.flagImg = flagImg,
      this.countryName = countryName,
      this.population = population,
      this.region = region,
      this.capital = capital
    this.nativeName = nativeName,
      this.subRegion = subregion,
      this.topLevelDom = topLevelDomain,
      this.currencies = currencies,
      this.languages = languages,
      this.borderCountry = borders
    this.cardContent()
    this.cardDetail
  }

  cardContent() {
    const cardContent = document.querySelector('.card-content')
    const card = document.createElement('div')
    card.className = ('card p-0 shadow m-3')
    card.style = "width: 14rem"
    card.innerHTML = `<img src="${this.flagImg.svg}" class="card-img-top w-100 h-100" alt="countries-img" />
        <div class="card-body">
          <h5 class="card-title fw-bolder p-2" id="country-name">
            ${this.countryName}
          </h5>
          <p class="card-text fw-bold">
            Population :<span class="fw-lighter m-1" id="population"
              >${this.population}</span
            >
          </p>
          <p class="card-text fw-bold">
            Region :<span class="fw-lighter m-1" id="region">${this.region}</span>
          </p>
          <p class="card-text fw-bold">
            Capital :<span class="fw-lighter m-1" id="capital"
              >${this.capital}</span
            >
          </p>
        </div>`
    cardContent.appendChild(card)
    card.addEventListener('click', this.cardDetail)

  }

  cardDetail() {
    const allFlagContainer = document.querySelector('.flag-cont')
    const detailCards = document.querySelector('.detail-card')
    const detailCardContent = document.querySelector('.detail-card-content')
    if(this.countryName === this.countryName){
      allFlagContainer.style.display = "none"
      detailCards.style.display = "block"
      detailCardContent.innerHTML = `<div class="flag-img mt-5 col-md-6">
      <img class="card-detail-img w-100" src="${this.flagImg.svg}" alt="country-flags">
  </div>

  <div class="card-body p-4 col-md-4" style="width: 0rem;">
      <h3 class="card-title fw-bolder">Belgium</h3>
      <p class="card-text fw-bold">Native Name: <span class="fw-lighter">Belgie</span></p>
      <p class="card-text fw-bold">Population: <span class="fw-lighter">11.379.511</span></p>
      <p class="card-text fw-bold">Region: <span class="fw-lighter">Europe</span></p>
      <p class="card-text fw-bold">Sub Region: <span class="fw-lighter">Western Europe</span></p>
      <p class="card-text fw-bold">Capital: <span class="fw-lighter">Brussels</span></p>
      <p class="card-text fw-bold">Top Level Domain: <span class="fw-lighter">be</span></p>
      <p class="card-text fw-bold">Currencies: <span class="fw-lighter">Euro</span></p>
      <p class="card-text fw-bold">Languages: <span class="fw-lighter">Dutch,French,German</span></p>

      <div class="border-container">
          <p class="fw-bold">Border Countries <i class="fa-solid fa-angles-down" style="color: darkorange;"></i></p>
          <button class="btn btn-outline-info shadow m-1">France</button>
          <button class="btn btn-outline-info shadow m-1">Germany</button>
          <button class="btn btn-outline-info shadow m-1">Netherlands</button>
      </div>
  </div>`
  
    }


  }

}

CardContent.prototype.cardContent()

/* şuan ki yol çok efektif olmadı tüm dom elemanlarını bir class ta proporty olarak ekle ve öylelikle çağır */