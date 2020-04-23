let upper_right = document.getElementById("upper-right")




function leftside(){
   document.body.innerHTML= `
         <div class="container"> 
              <div class="panels">
                  <div class="leftpanel">x</div>
                  <div class="rightpanel" onmouseover="rightside()">y</div>
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







function rightside(){
   document.body.innerHTML=`
            <div class="container"> 

               <div class="panels">
                   <div class="leftpanel" onmouseenter="leftside()">x</div>
                   <div class="rightpanel" onmouseenter="rightside()">y</div>
               </div>

               <div class="container-content">

                   <div class='content'id='center'>c</div>

               </div>

            </div>  
`
}



