var ctx = document.getElementsByClassName('chart')


var grafico = new Chart(ctx,{
    type:'line',
    data:{
        labels:['Jan','Fev','Marc','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
        datasets:
            [{label:"taxa de cliques 2016",
            data:[3,4,2,5,7,8,9,1,3,4,1,23],
            borderWidth:2,
            borderColor:'rgb(77,166,253,0.85)',
            backgroundColor:'transparent',
        }]

    }
})


var ajax = new XMLHttpRequest()

function BDAcess(){
    var tempo = 20000; //Vinte segundos

    (function selectNumUsuarios () {
        ajax({
          url: "index.php",
          success: function (n) {
              //essa é a function success, será executada se a requisição obtiver exito
              document.getElementById("#qqId").text(n);
          },
          complete: function () {
              setTimeout(selectNumUsuarios, tempo);
          }
       });
    })();
};


