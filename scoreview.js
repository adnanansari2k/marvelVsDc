class Score{
    _dcScoreEl = document.querySelector('.dcScore');
    _marvelScoreEl= document.querySelector('.marvelScore');
   
   updateScoreData(dc,marvel){
     this._dcScoreEl.innerHTML = `Score ${dc}`
      this._marvelScoreEl.innerHTML = `Score ${marvel}`
   }
}
export default new Score() 