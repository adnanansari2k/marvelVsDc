import { AJAX } from './config.js'
import { url, key } from './helper.js'
import WinningView from './winningView.js'
export const state = {
   marvelData:[],
   dcData:[],
   marvel: {},
   dc: {},
   fight:0,
   marvelScore: 0,
   dcScore: 0,
   round: 1,
   marvelPlayers: [],
   dcPlayers:[],
   winner:''
}

export function convert(data) {
   const convertedData = {};
   for (let key in data.powerstats) {
      let value = parseInt(data.powerstats[key], 10);
      convertedData[key] = isNaN(value) ? 0 : value;
   }
   return convertedData
}
export const fight = function(marvel,dc) {
   const marvelStates = convert(marvel)
   const dcStates = convert(dc)
   let marvelHit = 0
   let dcHit = 0
   for (let key in marvelStates) {
      if (marvelStates[key] > dcStates[key]) {
         ++marvelHit
      }
      if (marvelStates[key] < dcStates[key]) ++dcHit
   }
   if (marvelHit > dcHit) ++state.marvelScore;
   if (marvelHit < dcHit) ++state.dcScore;
   if (marvelHit === dcHit) {}

} 

export const winOrloos = function() {
   if (state.marvelScore > state.dcScore) {
      state.winner = "Marvel"
      WinningView.winPage()
      WinningView.render(state)
   }
   if (state.marvelScore === state.dcScore) {
      state.winner = "Draw"
      WinningView.winPage()
      WinningView.render(state)
      
   }
   if (state.marvelScore < state.dcScore) {
      state.winner = "dc"
      WinningView.winPage()
      WinningView.render(state)
   }
}

export const resetScores = function(){
   state.marvel ={} 
   state.dc = {}
   state.marvelScore =0 
   state.dcScore = 0
   state.marvelPlayers = []
   state.dcPlayers = []
   state.winner = ''
   state.round = 1
}

export const loadData = async function() {
   try {
      state.dcData =[]   
      state.marvelData=[]
      let number = Math.ceil(Math.random() * 740)
      for (let i = number; i < number + 10; i++) {
         const data = await AJAX(`${url}${key}/${i}`)
         if (!data.biography.publisher) continue;
         
         if (data.biography.publisher.split(' ')[0] === "Marvel") {
            state.marvelData.push(data)
            
         }
         if (data.biography.publisher.split(' ')[0] === "DC") {
           state.dcData.push(data)
         }
      }
   } catch (e) {
      throw e
   }

}