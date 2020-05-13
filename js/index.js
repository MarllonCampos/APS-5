var upper_right = document.getElementById("upper-right")
var upper_left = document.querySelector('.upper-left')
var lower_left = document.querySelector('.lower-left')
var lower_right = document.querySelector('.lower-right')
let center = document.querySelector(".center")
var containerContent = document.querySelector(".container-content")
var max = 0.00
var media =1.3
var min = 0.0000
var lastValue
var alerta = false




 


var updateMedia = setInterval(()=>{
    const temperatura = window.aux_temp
    max = temperatura[0]
    min = temperatura[0]
    media = 0   
    for(let i = 0; i < temperatura.length; i++){
        if(temperatura[i] > max){
            max = temperatura [i]
        }
        if(temperatura[i] < min){
            min = temperatura[i]
        }
        media += temperatura[i]  
        lastValue = temperatura[temperatura.length - 1]
    }

    
    media = media/temperatura.length
    
    
    upper_right.innerHTML = `Último valor inserido = ${lastValue}ppm <br>Máximo valor alcançado: ${max.toFixed(2)}ppm <br> Média dos valores = ${media.toFixed(2)}ppm <br> Minimo valor = ${min.toFixed(2)}ppm `


},1000)









