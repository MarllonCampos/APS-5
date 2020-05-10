var ctx = document.getElementsByClassName('chart')
var aux_temp = []
var aux_data_hora = []
var temperatura =[]
var data_hora  = []

var grafico = new Chart(ctx,{
    type:'line',
    data:{
        labels:['a30',"b40","c60","d70"],
        datasets:
            [{label:"Tabela de Temperaturas",
            data:["30","40","60","70"],
            borderWidth:2,
            borderColor:'rgba(77,166,253,0.85)',
            backgroundColor:'transparent',
        }]

    }
})

var RefreshAutomatico = setInterval(function minhafuncao() {
    $.ajax({
         url: 'http://localhost:3000/temperatura/',
         dataType: 'json', 
         cache:false,
         type: 'get',
         success: function (response) {
             updateChart(response)
         },
         error:function(erro){
             console.log(erro)
         },
         
     })
     
     function updateChart(data){
        grafico.data.labels = []
        grafico.data.datasets[0].data = []
        for (let i = 0 ; i < data.temperatura.length ; i++){

           grafico.data.labels.push(`${(data.data[i].substring(0,10).replace("-",String.fromCharCode(47))).replace("-",String.fromCharCode(47))} ${data.hora[i]}`)
           grafico.data.datasets[0].data.push(data.temperatura[i])
    


           if(aux_data_hora[i] != grafico.data.labels[i]){
                aux_data_hora.push(`${(data.data[i].substring(0,10).replace("-",String.fromCharCode(47))).replace("-",String.fromCharCode(47))} ${data.hora[i]}`)
           }
           
           if(aux_temp[i]!= grafico.data.datasets[0].data[i]){
                aux_temp.push(grafico.data.datasets[0].data[i])
           }
            

           
        }

           
           
        } 
        grafico.update()



    }   ,2000)




