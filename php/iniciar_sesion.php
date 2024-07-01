<?php
session_start();

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
    $email = $conn->real_escape_string($_POST['email']);
    $password = $conn->real_escape_string($_POST['password']);

    // Consulta para buscar el usuario por correo electrónico
    $sql = "SELECT * FROM usuarios WHERE email = ?";
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();

            // Verificar la contraseña
            if (password_verify($password, $row['password'])) {
                // Contraseña correcta, iniciar sesión
                $_SESSION['loggedin'] = true;
                $_SESSION['userid'] = $row['id'];
                $_SESSION['email'] = $row['email'];

                // Redirigir a la página principal
                header("Location: AP-movies.html");
                exit();
            } else {
                // Contraseña incorrecta
                echo "Contraseña incorrecta.<br>";
                echo "Password ingresada: " . $password . "<br>";
                echo "Password en la base de datos: " . $row['password'] . "<br>";
            }
        } else {
            // No se encontró el usuario
            echo "No se encontró una cuenta con ese correo electrónico.";
        }

        $stmt->close();
    } else {
        echo "Error al preparar la consulta.";
    }
}

// Cerrar conexión
$conn->close();
?>
