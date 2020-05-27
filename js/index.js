var upper_right = document.getElementById("upper-right")
var max = 0
var media =0
var min = 0
var lastValue





 


function updateMedia (){
    const temperatura = window.grafico.data.datasets[0].data.slice()
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
    
    upper_right.innerHTML = `Último valor inserido = ${lastValue}°C <br>Máximo valor alcançado: ${max.toFixed(2)}°C <br> Média dos valores = ${media.toFixed(2)}°C <br> Minimo valor = ${min.toFixed(2)}°C `


}









