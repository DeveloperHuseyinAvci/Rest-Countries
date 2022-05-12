class CountryApi {
  constructor() {}
  async countryApiGet() {
    const apiData = await fetch("https://restcountries.com/v2/all");
    const dataObject = await apiData.json();

    dataObject.forEach((object) => {
      //console.log(object);
      const cardData = new CardContent(
        object.flag,
        object.name,
        object.population,
        object.region,
        object.capital,
        object.nativeName,
        object.subregion,
        object.topLevelDomain,
        object.currencies, // hata kontrolü uygula (try & catch)
        object.languages, // hata kontrolü uygula (try & catch)
        object.borders, // hata kontrolü uygula  (try & catch)
        object.cioc
      );
    });
  }
}

CountryApi.prototype.countryApiGet();

class CardContent {
  constructor(
    flagImg,
    countryName,
    population,
    region,
    capital,
    nativeName,
    subregion,
    topLevelDomain,
    currencies,
    languages,
    borders,
    cioc
  ) {
    try {
      (this.flagImg = flagImg),
        (this.countryName = countryName),
        (this.population = population),
        (this.region = region),
        (this.capital = capital);
      (this.nativeName = nativeName),
        (this.subregion = subregion),
        (this.topLevelDomain = topLevelDomain[0]),
        (this.currencies = currencies[0].name),
        (this.languages = languages[0].name),
        (this.borderCountry = borders),
        (this.cioc = cioc);
    } catch (error) {
      console.log("");
    }

    this.cardContentFunc();
  }

  cardContentFunc() {
    const inputGroup = document.querySelector(".input-group");
    const dropDown = document.querySelector(".dropdown");
    const cardContent = document.querySelector(".card-content");
    const card = document.createElement("div");

    card.className = "card p-0 shadow m-3";
    card.style = "width: 14rem";
    card.innerHTML = `<img src="${this.flagImg}" class="card-img-top w-100 h-100" alt="countries-img" />
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
        </div>`;

    cardContent.appendChild(card);
    console.log(this.cioc);
    // console.log(this.borderCountry === this.cioc);
    
    card.addEventListener("click", () => {
      const allFlagContainer = document.querySelector(".flag-cont");
      const detailCards = document.querySelector(".detail-card");
      const detailCardContent = document.querySelector(".detail-card-content");

      detailCards.style.display = "block";
      allFlagContainer.style.display = "none";
      inputGroup.style.display = "none";
      dropDown.style.display = "none";

      detailCardContent.innerHTML = `<div class="flag-img mt-5 col-md-6">
        <img class="card-detail-img w-100" src="${this.flagImg}" alt="country-flags">
        </div>
        
        <div class="card-body p-4 col-md-4" style="width: 0rem;">
        <h3 class="card-title fw-bolder">${this.countryName}</h3>
        <p class="card-text fw-bold">Native Name: <span class="fw-lighter">${this.nativeName}</span></p>
        <p class="card-text fw-bold">Population: <span class="fw-lighter">${this.population}</span></p>
        <p class="card-text fw-bold">Region: <span class="fw-lighter">${this.region}</span></p>
        <p class="card-text fw-bold">Sub Region: <span class="fw-lighter">${this.subregion}</span></p>
        <p class="card-text fw-bold">Capital: <span class="fw-lighter">${this.capital}</span></p>
        <p class="card-text fw-bold">Top Level Domain: <span class="fw-lighter">${this.topLevelDomain}</span></p>
        <p class="card-text fw-bold">Currencies: <span class="fw-lighter">${this.currencies}</span></p>
        <p class="card-text fw-bold">Languages: <span class="fw-lighter">${this.languages}</span></p>
  
        <div class="border-container">
            <p class="fw-bold">Border Countries <i class="fa-solid fa-angles-down" style="color: darkorange;"></i></p>
            
        </div>
        </div>`;
/*  komşu ülkelerdeki cioc ları normal ülke ismine çevirerek button içine yazdır*/
      if (this.borderCountry != undefined) {
        this.borderCountry.forEach((borderName) => {
          const borderContainer = document.querySelector(".border-container");
          const borderButton = document.createElement("button");
          borderButton.className = "btn btn-outline-info shadow m-1";
          borderButton.innerHTML = `${borderName}`;
          borderContainer.appendChild(borderButton);
        });
      } else {
        const borderContainer = document.querySelector(".border-container");
        const borderButton = document.createElement("button");
        borderButton.className = "btn btn-outline-info shadow m-1";
        borderButton.style.color = "tomato";
        borderButton.style.borderColor = "tomato";
        borderButton.innerHTML = `This is an island country`;
        borderContainer.appendChild(borderButton);
      }

      const backBtn = document.querySelector(".back-btn");
      backBtn.addEventListener("click", () => {
        detailCards.style.display = "none";
        allFlagContainer.style.display = "block";
        inputGroup.style.display = "flex";
        dropDown.style.display = "block";
      });
    });
  }
}
