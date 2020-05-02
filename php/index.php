<?php
    $Servidor = 'apsunip5.cslcoibcanu8.sa-east-1.rds.amazonaws.com';
    $User='root';
    $Senha='apsardunip';
    $Database='aps';
    $num;

    $conexão= mysqli_connect($Servidor,$User,$Senha,$Database) or die ("Conexão não estabelecida!");


    $sql = "select * from TEMPERATURA";
    $resultado = mysqli_query($conexão,$sql) or die("erro ao consultar banco de dados");
        
        while($registro = mysqli_fetch_assoc($resultado))
        {
            $id=$registro['id'];
            $temperatura=$registro['Temperatura'];
            $data=$registro['Data'];
            $hora=$registro['Hora'];
            
            echo $id;
            echo $temperatura;
            echo $data;
            echo $hora;
        }
    mysqli_close($conexão);
?>    
        