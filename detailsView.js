import Superhero from './superhero.js'
class DetailsView extends Superhero {
   _parentEl = document.querySelectorAll('.backBtn');
   
     detailsHandler(handler){
        let parentEl = document.querySelectorAll('.detailsBtn');
        parentEl.forEach(btn=>{
           btn.addEventListener('click',
              handler
           )
        }) 
   }
   
   backBtbHandler(handler){
      
      let parentEl = document.querySelectorAll('.backBtn');
      
      parentEl.forEach(btn=>{
         btn.addEventListener('click',handler)
      })
   }

}

export default new DetailsView()