var ctx = document.getElementsByClassName('chart')
const years = []
const temps = []


var grafico = new Chart(ctx,{
    type:'line',
    data:{
        labels:['Jan','Fev','Marc','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
        datasets:
            [{label:"taxa de cliques 2016",
            data:[3,4,2,5,7,8,9,1,3,4,1,23],
            borderWidth:2,
            borderColor:'rgba(77,166,253,0.85)',
            backgroundColor:'transparent',
        }]

    }
})
const tempo = 2000; 
let value = [3,6]





var RefreshAutomatico = setInterval(function minhafuncao() {
    $.ajax({
         url: 'http://localhost:3000/temperatura/',
         dataType: 'json',
         cache:false,
         type: 'get',
         success: function (data) {
             console.log(data)
         },
         error:function(erro){
             console.log(erro)
         },
         
     })
 }
,20000)

