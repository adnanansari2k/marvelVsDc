import * as model from './model.js'
class BtnView {
   _parentEl = document.querySelector('.heroLoaderBtn');
  _updateRound(){
    if(model.state.round === 5){ 
      ++model.state.round 
       return  'New Game'
    }else if(model.state.round === 6){
       model.state.round = 2
      return `Round 2`
    }else{
    return `Round ${++model.state.round}/5`}
  }
  
  
   loadDataHandler(handler) {
      this._parentEl.addEventListener('click', () => {
       this._parentEl.innerHTML =this._updateRound()
         handler()
      }) 
   }
}

export default new BtnView()