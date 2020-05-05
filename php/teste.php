<?php
    include "conexao.php";
    header('Content-Type: application/json;charset=utf-8');
    $response = array();
    $num=array();
    $sql = "select * from TEMPERATURA";
    $resultado = mysqli_query($conexão,$sql) or die("erro ao consultar banco de dados");
    $registro = mysqli_fetch_assoc($resultado) ;   
       do{
        
            array_push($num,$registro);
            $id=$registro['id'];
            $temperatura=$registro['Temperatura'];
            $data=$registro['Data'];
            $hora=$registro['Hora'];
            
        }while($registro=mysqli_fetch_assoc($resultado));

        $response = array(
            'status' => true,
            'message' => 'sucess',
            'data' => ph_fetch_all($num)
        );
        echo (json_encode($response));
        mysqli_close($conexão);
        
?>    
        