let upper_right = document.getElementById("upper-right")
let center = document.querySelector(".center")
var containerContent = document.querySelector(".container-content")




function leftside(sheet){
   document.querySelector('.pagestyle').setAttribute('href',sheet)
   document.body.innerHTML= `
         <div class="container"> 
              <div class="panels">
                  <div class="leftpanel" onclick="">x</div>
                  <div class="rightpanel" onclick="rightside('css/secondpage.css')">y</div>
              </div>

              <div class="container-content">
                  <div class='content' id='upper-left'>a</div>    

                  <div class='content'id='lower-left'>b</div>     

                  <div class='content'id='center'>c</div>      

                  <div class='content' id='upper-right'>d</div>      

                  <div class='content' id='lower-right'>e</div>
              </div>

          </div>  

          
   `
   
   
}


function rightside(sheet){
   document.querySelector('.pagestyle').setAttribute('href',sheet)


   document.body.innerHTML=`

               <div class="container"> 

                  <div class="panels">
                      <div class="leftpanel" onclick="leftside('css/style.css')">x</div>
                      <div class="rightpanel">y</div>
                  </div>

                  <div class="container-content">

                      <div class='content'id='center'>c</div>

                  </div>

               </div>  

      </div>
`
}



