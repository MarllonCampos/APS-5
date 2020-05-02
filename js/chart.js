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


fetch('./php/teste.php')
.then(json => {
    if(json.status  > 199 && json.status <300){
        console.log(`O codigo foi ${json.status}`)
        console.log(json)
    }
})



const tempo = 2000; //Vinte segundos


