import * as model from './model.js'
import { AJAX } from './config.js'
import { url, key } from './helper.js'
import Btnview from './btnview.js'
import DetailView from './detailsView.js'
import Marvel from './marvel.js'
import Dc from './dc.js'
import Score from './scoreview.js'
import WinningView from './winningView.js'
import RoundView from './roundView.js'
import AllMarvelPlayerView from './allMarvelPlayerView.js'

import AllDcPlayerView from './allDcPlayerView.js'

let sfx ={imgClick: new Howl({
   src:['https://www.fesliyanstudios.com/play-mp3/6198'],
   html5:true
}),
   btn:new Howl({
      src:['https://www.fesliyanstudios.com/play-mp3/4'],
      html5:true
   }),
   winner:new Howl({
      src:['https://www.fesliyanstudios.com/play-mp3/2654'],
      html5:true
   })
}
const btnController = async function() {
   try {
      sfx.btn.play()
      model.state.fight = 0
      Marvel.loading()
      Dc.loading()
      await model.loadData()
      
      AllDcPlayerView.render(model.state.dcData)
      AllMarvelPlayerView.render(model.state.marvelData)

      AllDcPlayerView.addClickEventHandlers(selectionController)
      AllMarvelPlayerView.addClickEventHandlers(selectionController)
   } catch (e) {
      console.error(e);
   }

}

const selectionController = async function(e) {
   sfx.imgClick.play()
   const i = event.target.dataset.id;
   let newData = await AJAX(`${url}${key}/${i}`)
   let marvel,dc
   if (newData.biography.publisher.split(' ')[0] === 'Marvel') {
      ++model.state.fight
      marvel = newData
      model.state.marvel = newData
      model.state.marvelPlayers.push(model.state.marvel)
      Marvel.render(model.state)
   }
   if (newData.biography.publisher.split(' ')[0] === 'DC') {
      ++model.state.fight
      dc = newData
      model.state.dc = newData
      model.state.dcPlayers.push(model.state.dc)
      Dc.render(model.state)
   }
   DetailView.detailsHandler(detailscontroller)
   if (model.state.fight === 2) {
     RoundView.render(model.state.round)
      model.fight(model.state.marvel,model.state.dc)
      Score.updateScoreData(model.state.dcScore, model.state.marvelScore)
   }
   if(model.state.fight === 2 && model.state.round === 6){
         await model.winOrloos()
         sfx.winner.play()
         model.resetScores()
         Marvel.clear()
         Dc.clear()
         Score.updateScoreData(model.state.dcScore, model.state.marvelScore)
   }
      
}
 
const detailscontroller = function(e){
   let name = e.target.dataset.name
   if (name === 'marvel') {
      Marvel.renderDetails(model.state.marvel)
   }
   if(name==='dc'){
      Dc.renderDetails(model.state.dc)
   }
   DetailView.backBtbHandler(backBtnController)
}

const backBtnController = function(e){
   console.log(model.state);
   let name = e.target.dataset.name
   
   if (name === 'marvel') {
      Marvel.render(model.state)
   }
   if(name === 'dc'){
        Dc.render(model.state)
   }
 
   Score.updateScoreData(model.state.dcScore, model.state.marvelScore)
}


function init() {
   Btnview.loadDataHandler(btnController)
   
}
init();