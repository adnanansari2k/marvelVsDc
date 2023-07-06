import Superhero from './superhero.js'
class RoundView extends Superhero {
   _parentEl = document.querySelector('.round');
   markup(){
      console.log(this._data);
      return `
          <h1 class="roundTitle">Round ${this._data}</h1>
      `
   }
} 

export default new RoundView()