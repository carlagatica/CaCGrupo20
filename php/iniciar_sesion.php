<?php
$servername="localhost";
$username="root";
$password="";
$database_name="usersdb";

$conn=mysqli_connect($servername,$username,$password,$database_name);
if (!$conn) {
    die("Conexion fallida:" . mysqli_connect_error());
}

// Verificar que se hayan enviado los datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $conn->real_escape_string($_POST['email']);
    $pass = $conn->real_escape_string($_POST['pass']);

    // Consulta para buscar el usuario por correo electrónico
    $sql = "SELECT * FROM users WHERE email = ?";
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();

            
            if ($_POST['password'] === $row['Password']) {
                // Contraseña correcta, iniciar sesión
                $_SESSION['loggedin'] = true;
                $_SESSION['userid'] = $row['id'];
                $_SESSION['email'] = $row['email'];

                // Redirigir a la página principal
                header("Location: ../index_fijo.html");
                exit();
            } else {
                // Contraseña incorrecta
                echo "Contraseña incorrecta.<br>";
                echo "Password ingresada: " . $pass . "<br>";
                echo "Password en la base de datos: " . $row['pass'] . "<br>";
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
