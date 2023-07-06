import * as model from './model.js'
import {AJAX} from './config.js'
import {url,key} from './helper.js'
export default class Superhero {
   _data;
   render(data) {
      if (!data || (Array.isArray(data) && data.length === 0)) return 
      this._data = data
      let  markup = this.markup()
      this._parentEl.innerHTML = ''
      this._parentEl.insertAdjacentHTML('afterbegin', markup)
   }
   
   renderDetails(data) {
      if (!data || (Array.isArray(data) && data.length === 0)) return
      this._data = data
      let markup = this.detailsMarkup()
      this._parentEl.innerHTML = ' '
      this._parentEl.insertAdjacentHTML('afterbegin', markup)
   }
   
   clear(){
      this._parentEl.innerHTML = ''
   }
   
   addClickEventHandlers(handler) {
    const playerElements = this._parentEl.querySelectorAll('.player');
    playerElements.forEach((playerElement) => {
      playerElement.addEventListener('click', (event) => {
         handler()
      });
    });
  }
 
  

   loading() {
      let html = `
         <div class='loader'>
           <span class="material-symbols-outlined">
             hourglass_bottom
           </span>
         
         </div>
       `
      this._parentEl.innerHTML = '';
      this._parentEl.insertAdjacentHTML('afterbegin', html);
   }
   
   compareStates(){
      let marvelStates = model.convert(model.state.marvel)
      let dcStates = model.convert(model.state.dc)
      let resultsM = {}
      let resultsD = {}
      for(let key in marvelStates)
      if(marvelStates[key] > dcStates[key]){
         resultsM[key] = 'green'
         resultsD[key] = 'red'
      }else if(dcStates[key]>marvelStates[key] ) {
         resultsM[key] = 'red'
         resultsD[key] = 'green'
      } else if(dcStates[key] === marvelStates[key]){
         resultsM[key] = 'blue'
         resultsD[key] = 'blue'
      } 
         return {resultsM,resultsD}
   }

}