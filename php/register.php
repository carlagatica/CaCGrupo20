<?php
$servername="localhost";
$username="root";
$password="";
$database_name="usersdb";

$conn=mysqli_connect($servername,$username,$password,$database_name);
if (!$conn) {
    die("Conexion fallida:" . mysqli_connect_error());
}

if(isset($_POST['register'])) {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];
    $fechaNacimiento = $_POST['fechaNacimiento'];
    $pais = $_POST['pais'];

    $sql_query = "INSERT INTO users (nombre, apellido, email, pass, fechaNacimiento, pais) VALUES ('$nombre', '$apellido', '$email', '$pass', '$fechaNacimiento', '$pais')";

    if(mysqli_query($conn, $sql_query)) {
        echo "Usuario generado exitosamente";
    }
    else {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>