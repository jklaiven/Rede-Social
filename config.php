<?php

    $host = "localhost";
    $usuario = 'root';
    $senha = "";
    $database = "forum";

    $conexao = new mysqli($host,$usuario,$senha,$database);

    if($conexao->connect_error) {
        die("Falha na conexão com o banco de dados" .$conexao->connect_error);
    } else {
        //echo "Conexao efetuada com sucesso !";
    }

?>