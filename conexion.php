<?php
class conexion {
private $server = 'localhost';
private $user = 'root';
private $password = '';
private $database = 'AP-movies';
private $port ='3306';
private $conexion;

function __construct(){
    $this->conexion =new mysqli($this->server, $this->user, $this->password, $this->database, $this->port);
    if($this->conexion->connect_errno){
        echo "error al conectar";
        die();
    }
}
#convertir los caracteres a utf8
private function convertirUTF8($array){
    array_walk_recursive($array,function(&$item,$key){
        if(!mb_detect_encoding($item,'utf8', true)){
            $item = utf8_encode($item);     #'utf8_encode' is deprecated.
        }
    });
    return $array;
}
#obtener los datos de la base de datos
public function obtenerDatos($sqlstr){
    $result = $this->conexion->query($sqlstr);
    return $this->conexion->affected_rows;
}

#para obtener el id de un registro
public function nonQueryId($sqlstr){
    $results = $this->conexion->query($sqlstr);
    $filas = $this->conexion->affected_row;
    if($filas >= 1){
        return $this->conexion->insert_id;
    }else{
        return 0;
    }
}



class <conexion> gromasgustavo [ 4 minutes ago] -Api php sencillo, movies
public function nonQueryId($sqlstr){
    if($filas >= 1){
        return $this->conexion->insrt_id;
    }else{
        return 0;
    }
    }
}

}
?>