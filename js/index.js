var upper_right = document.getElementById("upper-right")
var upper_left = document.querySelector('.upper-left')
var lower_left = document.querySelector('.lower-left')
var lower_right = document.querySelector('.lower-right')
let center = document.querySelector(".center")
var containerContent = document.querySelector(".container-content")
var max = 0
var media =0
var min =0




var updateMedia = setInterval(()=>{
    var temperatura = window.aux_temp
    max = temperatura[0]
    min = temperatura[0]
    for(let i = 0; i < temperatura.length; i++){
        if(temperatura[i] > max){
            max = temperatura [i]
        }
        if(temperatura[i] < min){
            min = temperatura[i]
        }
        media = temperatura[i]
    }   
    media = media/temperatura.length
    upper_right.innerHTML = `Máximo valor alcançado: ${max.toFixed(2)}ppm <br> Média dos valores = ${media.toFixed(2)}ppm <br> Minimo valor = ${min.toFixed(2)}ppm`


    
},2050)










function leftside(sheet){
        document.querySelector('.pagestyle').setAttribute('href',sheet)

   
}


function rightside(sheet){
    document.querySelector('.pagestyle').setAttribute('href',sheet)
     
}



