import * as model from './model.js'
import Superhero from './superhero.js'
import Score from './scoreview.js'
class WinningView extends Superhero {
   _parentEl = document.querySelector('.win2 ');
   _parentEl2 = document.querySelector('.win')
   _closeBtn = document.querySelector('.closeBtn');
   _overlay = document.querySelector('.overlay');
   constructor() {
      super()
      this._closeBtn.addEventListener('click', this.winPage.bind(this))
   }
   winPage() {
      this._overlay.classList.toggle('hidden')
      this._parentEl2.classList.toggle('hidden')
   }

   markup() {
      let w
      if (this._data.winner === 'Marvel') {
         w = this._data.marvelPlayers
      } else {
         w = this._data.dcPlayers
      };
      console.log('hello',this._data);
      let playersHTML = '';
      for (let player of w) {
         playersHTML += `
      <span class="player">
        <img src="${player.image.url}" alt="failed to fetch" class='img2'>
        <h3 class="heroName2">${player.name}</h3>
      </span>
    `;
      } 
      return `
         <h1 class="title2">Winner is ${this._data.winner}</h1>
         ${playersHTML}
      `

   }
}
export default new WinningView()