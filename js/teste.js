
const years = []
const temps = []
minhaFuncao() 
function minhaFuncao() {
    $.ajax({
        url: 'http://localhost:3000/temperatura/',
        dataType: 'json',
        type: 'get',
        success: function (data) {
            console.log(data)
        },
        error:function(erro){
            console.log(erro)
        }
    })
}