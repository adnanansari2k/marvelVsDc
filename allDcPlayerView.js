import Superhero from './superhero.js'
class AllDcPlayerView extends Superhero {
  _parentEl = document.querySelector('.container2');
   
   markup() {
      let playersHTML = '';
      for (let player of this._data) {
         if (!player.image.url) {
            continue;
         }
         playersHTML += `
            <span class="player">
              <img src="${player.image.url}" alt="failed to fetch" class='img2' data-id=${player.id}>
              <h3 class="heroName2">${player.name}</h3>
            </span>
          `
      } 
        return `
         ${playersHTML}
      `
   }
   
   
  
}

export default new AllDcPlayerView()