import Superhero from './superhero.js'
class Dc extends Superhero {
   _parentEl = document.querySelector('.container2 ');
   markup() {
      console.log(this._data);
       return `
         <div class="subContainer">
            <img src="${this._data.dc.image.url}" alt="Unable to Fetch" class="dcHero hero">
            <h3 class="heroName dcHeroName">${this._data.dc.name}</h3>
            <h3 class="title">Powerstats</h3>
            <div class="powerstats">
               <h3 class="dcCombat powers ${ this.compareStates(). resultsD.combat}">Combats ${!+this._data.dc.powerstats.combat ?0: this._data.dc.powerstats.combat}</h3>
               <h3 class="dcSpeed powers ${ this.compareStates(). resultsD.speed}">Speed ${!+this._data.dc.powerstats.speed ?0: this._data.dc.powerstats.speed}</h3>
               <h3 class="dcDurability powers ${ this.compareStates(). resultsD.durability}">Durability ${!+this._data.dc.powerstats.durability ?0: this._data.dc.powerstats.durability}</h3>
               <h3 class="dcPower powers ${ this.compareStates(). resultsD.power}">Power ${!+this._data.dc.powerstats.power ?0: this._data.dc.powerstats.power}</h3>
               <h3 class="dcIntelligence powers ${ this.compareStates(). resultsD.intelligence}">Intelligence ${!+this._data.dc.powerstats.intelligence ?0: this._data.dc.powerstats.intelligence}</h3>
               <h3 class="dcStrength powers ${ this.compareStates(). resultsD.strength}">Strength ${!+this._data.dc.powerstats.strength ?0: this._data.dc.powerstats.strength}</h3>

            </div>
            <div class="detailsBtn dcBtn" data-name="dc">Details</div>
           </div>
      `
   }
   
   detailsMarkup(){
      return ` 
          <div class="detailContainer">
                              <span class="backBtn" data-name=dc>Back</span>
                         <h3 class  ="header2">Appearance</h3>
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

export default new Dc()