class CountryApi {
  constructor() {}
  async countryApiGet() {
    const apiData = await fetch("https://restcountries.com/v2/all")
    const dataObject = await apiData.json()


    dataObject.forEach(object => {
      // console.log(object);
      // 0 indexi olmayanlara then chact hata kontrolü uygula ve buna patikadan bakabilirsin 
      const cardData = new CardContent(
        object.flags,
        object.name,
        object.population,
        object.region,
        object.capital,
        object.nativeName,
        object.subregion,
        object.topLevelDomain,
        object.currencies, // hata kontrolü uygula (then chach)
        object.languages, // hata kontrolü uygula (then chach)
        object.borders // hata kontrolü uygula  (then chach)

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
    this.cardDetail()
  }

  cardContent() {
    const cardContent = document.querySelector('.card-content')
    const card = document.createElement('div')
    card.className = ('card p-0 shadow m-3')
    card.style = "width: 14rem"
    cardContent.appendChild(card)
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

    /* bootstrap ta ilk kutu boş ve gereksiz geliyor onu çöz*/
  }
  cardDetail() {

    //card detail buraya yazılacak 
  }
}


CardContent.prototype.cardContent()