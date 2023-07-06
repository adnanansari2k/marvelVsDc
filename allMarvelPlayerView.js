import Superhero from './superhero.js'
class AllMarvelPlayerView extends Superhero {
  _parentEl = document.querySelector('.container1');
  
   markup() {
      let playersHTML = '';
      for (let player of this._data) {
        if (!player.image.url) {
              continue;
           }
         playersHTML += `
            <span class="player">
              <img src="${player.image.url}" class='img2' alt="failed to fetch"  data-id=${player.id}>
              <h3 class="heroName2">${player.name}</h3>
            </span>
          `
      }
      
      return  playersHTML
       
      
      
   }
   
   
   
}

export default new AllMarvelPlayerView()