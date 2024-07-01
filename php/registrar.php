<?php

// Configuración de la conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$database = "registro";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("La conexión a la base de datos ha fallado: " . $conn->connect_error);
}

// Verificar que se hayan enviado los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Obtener datos del formulario y sanitizarlos
    $nombre = $conn->real_escape_string($_POST['nombre']);
    $apellido = $conn->real_escape_string($_POST['apellido']);
    $email = $conn->real_escape_string($_POST['email']);
    $password = $conn->real_escape_string($_POST['password']);
    $fechaNacimiento = $conn->real_escape_string($_POST['fechaNacimiento']);
    $pais = $conn->real_escape_string($_POST['pais']);

    // Validar los datos del formulario
    if (empty($nombre) || empty($apellido) || empty($email) || empty($password) || empty($fechaNacimiento) || empty($pais)) {
        die("Por favor, completa todos los campos.");
    }

    // Hash de la contraseña
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insertar datos en la tabla 'usuarios'
    $sql = "INSERT INTO usuarios (nombre, apellido, email, password, fechaNacimiento, pais) VALUES ('$nombre', '$apellido', '$email', '$hashed_password', '$fechaNacimiento', '$pais')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro exitoso";
        // Redirigir a una página de éxito (opcional)
        // header("Location: success.php");
        // exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Cerrar conexión
$conn->close();

?>
