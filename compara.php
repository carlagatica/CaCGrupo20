<?php
// Hash de ejemplo (esto debe ser el valor real de la base de datos para el usuario)
$hash_from_db = '$2y$10$yv0miwpYVNWXI...'; // Coloca aquí el hash completo desde tu base de datos

// Contraseña ingresada
$password = '9449';

// Verificación manual
if (password_verify($password, $hash_from_db)) {
    echo "La contraseña es correcta.";
} else {
    echo "La contraseña es incorrecta.";
}
?>
