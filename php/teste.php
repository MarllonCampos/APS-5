<?php
    $Servidor = 'apsunip5.cslcoibcanu8.sa-east-1.rds.amazonaws.com';
    $User='root';
    $Senha='apsardunip';
    $Database='aps';
    $num = array();

    $conexão= mysqli_connect($Servidor,$User,$Senha,$Database) or die ("Conexão não estabelecida!");


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



        mysqli_close($conexão);
        exit(json_encode($num));
?>    
        