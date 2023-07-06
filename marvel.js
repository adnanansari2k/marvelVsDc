import Superhero from './superhero.js'
class Marvel extends Superhero {
  _parentEl = document.querySelector('.container1 ');
  _detailBtn = document.querySelector('.detailsBtn')
  deatailBtn(){
     
  }
  
   markup() {

      return `
         <div class="subContainer">
            <img src="${this._data.marvel.image.url}" alt="Unable to Fetch" class="marvelHero hero">
            <h3 class="heroName marvelHeroName">${this._data.marvel.name}</h3>
            <h3 class="title">Powerstats</h3>
            <div class="powerstats">
               <h3 class="marvelCombat powers ${ this.compareStates(). resultsM.combat}" >Combats ${!+this._data.marvel.powerstats.combat ?0: this._data.marvel.powerstats.combat}</h3>
               <h3 class="marvelSpeed powers ${ this.compareStates(). resultsM.speed}">Speed ${!+this._data.marvel.powerstats.speed ?0: this._data.marvel.powerstats.speed}</h3>
               <h3 class="marvelDurability powers ${ this.compareStates(). resultsM.durability}">Durability ${!+this._data.marvel.powerstats.durability ?0: this._data.marvel.powerstats.durability}</h3>
               <h3 class="marvelPower powers ${ this.compareStates(). resultsM.power}">Power ${!+this._data.marvel.powerstats.power ?0: this._data.marvel.powerstats.power}</h3>
               <h3 class="marvelIntelligence powers ${ this.compareStates(). resultsM.intelligence}">Intelligence ${!+this._data.marvel.powerstats.intelligence ?0: this._data.marvel.powerstats.intelligence}</h3>
               <h3 class="marvelStrength powers ${ this.compareStates(). resultsM.strength}">Strength ${!+this._data.marvel.powerstats.strength ?0: this._data.marvel.powerstats.strength}</h3>

            </div>
            <div class="detailsBtn marvelBtn" data-name="marvel">Details</div>
           </div>
      `
   }
    
   detailsMarkup(){
      return `
          <div class="detailContainer">
                    <span data-name=marvel class="backBtn">Back</span>
               <h3 class="header2">Appearance</h3>
                  <div>
                     <p class="weight">Weight ${this._data .appearance.weight[1]}</p>
                     <p class="height">Height ${this._data.appearance.height[0]}Ft</p>
                     <p class="gender">Gender ${this._data.appearance.gender}</p>
                     <p class="race">Race  ${this._data.appearance.race}</p>
                  </div>
                      <h3 class="header2">Biography</h3>
                  <div class="bio">
                     <p>Alter Egos:- </p>
                     <p>first appearance:- </p>
                     <p>Full Name;-</p>
                     <p>Place Of Birth:- Goutham city</p>
                     <p>Publisher:- ${this._data.biography.publisher}</p>
                  </div>
                  <h3 class="header2">Connection</h3>
                  <div>
                     <p>Group Affiliationg:- </p>
                     <p>Relatives:- ${this._data.connections.relatives} </p>
                  </div>
                  <h3 class="header2">Work</h3>
                  <div class="work">
                     <p>Occupation:-${this._data.work.occupation} </p>
                     <p>Base:- ${this._data.work.base}</p>
                  </div>
                  
               </div>
      `
      
      
   }

}

export default new Marvel()