var ctx = document.getElementsByClassName('chart')
var temperatura =[]
var data_hora  = []

var grafico = new Chart(ctx,{
    type:'line',
    data:{
        labels:['a30',"b40","c60","d70"],
        datasets:
            [{label:"Temperatura em Celsius",
               data:["30","33","21","12"],
            borderWidth:2,
            borderColor:'rgba(77,166,253,0.85)',
            backgroundColor:'#10dccf',
        }]
    },
    options:{
        title:{
            display:true,
            text: "Tabela de Temperatura",
            fontSize:28,
            fontColor:'white',
            fontWeight:'bold',
        },
        scales:{
            yAxes:[{ 
                ticks:{ 
                    callback: function(value,index,values){ return  value + 'ºC'},
                    suggestedMin:13
            }}],
        }
    }

})

var RefreshAutomatico = setInterval(function minhafuncao() {
    $.ajax({
         url: 'http://18.228.194.165:3000/temperatura/',
         dataType: 'json', 
         cache:false,
         type: 'get',
         success: function (response) {
             updateChart(response)
             
         },
         error:function(erro){
             console.log("Alerta, erro em conectar a API")  
         },
         
     })
     
    function updateChart(data){
       
        grafico.data.labels = []
        grafico.data.datasets[0].data = []
        var k = 10
        if (data.temperatura.length > 10 ){

            for (let i = 0 ; i < data.temperatura.length - (data.temperatura.length -10) ; i++){
                let j = data.temperatura.length - k
                let tempoEdata = (`${(data.data[j].substring(0,10).replace("-",String.fromCharCode(47))).replace("-",String.    fromCharCode(47))} *${data.hora[j]}`).split('*')

                grafico.data.labels.push(tempoEdata)
                grafico.data.datasets[0].data.push(data.temperatura[j])
                k = k - 1
            }
    
            
        }else{

            for (let i = 0 ; i < data.temperatura.length ; i++){
                let tempoEdata = (`${(data.data[i].substring(0,10).replace("-",String.fromCharCode(47))).replace("-",String.        fromCharCode(47))} *${data.hora[i]}`).split('*')

                grafico.data.labels.push(tempoEdata)
                grafico.data.datasets[0].data.push(data.temperatura[i])
            }   
        }   
            
        grafico.update()
        window.updateMedia() // Chama essa função do arquivo "index.js"
    }
}   ,3000)




