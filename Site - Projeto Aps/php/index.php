<?php
$Servidor = 'apsunip5.cslcoibcanu8.sa-east-1.rds.amazonaws.com';
$User='root';
$Senha='apsardunip';
$DataBase='aps';

$conexão= mysqli_connect($Servidor,$User,$Senha,$DataBase);

if(mysqli_connect_errno($conexão)){
    echo"Conexão não estabelecida";
}else{
        echo"Conexão realizada com sucesso!";}
?>
