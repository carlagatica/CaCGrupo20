<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://kit.fontawesome.com/f7fb471b65.js" crossorigin="anonymous"></script>
    <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css">
    <link rel="stylesheet" href="./css/estilos.css">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <title>registro AP-movies🍕</title>
</head>

<body class="bodyRegistrarse">
    <header class="header">
        <nav class="navegacion navbar navbar-expand-lg navbar-light">
            <a class="anclaLogo navbar-brand" href="./AP-movies.html">🍕 AP-Movies</a>
        </nav>
    </header>
    <main id="main" class="main">
        <section data-aos="zoom-in" data-aos-duration="1000" class="seccionRegistrarse container">
          



        <!--formulario--->
        <form method="post" id="form-registro" class="p-4 text-light rounded">
    <h2 class="tituloRegistrarse text-center mb-4">Registro</h2>
    <div class="form-group">
        <input type="text" class="form-control" placeholder="Nombre" id="nombre" name="nombre">
        <div id="error-nombre" class="error-text"></div>
    </div>
    <div class="form-group">
        <input type="text" class="form-control" placeholder="Apellido" id="apellido" name="apellido">
        <div id="error-apellido" class="error-text"></div>
    </div>
    <div class="form-group">
        <input type="email" class="form-control" placeholder="Email" id="email" name="email">
        <div id="error-email" class="error-text"></div>
    </div>
    <div class="form-group">
        <input type="password" class="form-control" placeholder="Contraseña" id="password" name="password">
        <div id="error-password" class="error-text"></div>
    </div>
    <div class="form-group">
        <input type="date" class="form-control" placeholder="Fecha de Nacimiento (dd/mm/aaaa)"
            id="fechaNacimiento" name="fechaNacimiento">
        <div id="error-fechaNac" class="error-text"></div>
    </div>
    <div class="form-group">
        <select name="pais" id="pais" class="form-control">
            <option value="">País</option>
            <option value="AR">Argentina</option>
            <option value="BO">Bolivia</option>
            <option value="BR">Brasil</option>
            <option value="CH">Chile</option>
            <option value="CO">Colombia</option>
            <option value="EC">Ecuador</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Perú</option>
            <option value="UY">Uruguay</option>
            <option value="VE">Venezuela</option>
        </select>
        <div id="error-pais" class="error-text"></div>
    </div>
    <div class="form-group form-check">
        <input class="form-check-input" type="checkbox" id="terminos">
        <label class="form-check-label textoCheck" for="terminos">Acepto términos y condiciones</label>
        <div id="error-terminos" class="error-text"></div>
    </div>
                 <div class="text-center">
                            <input id="btn-reg" type="submit" name="reg" value="Registrarse">
                </div>
            </form>


            <div>
                    <a id="ayuda" class="ayuda" href="./iniciosesion.html">Iniciar sesion</a>
                </div>

                <!--enviar los datos a register_AP-movies.php cuando el formulario se envía.--->
            <?php
            include("registrar.php");
            ?>

        </section>
    </main>
    <footer class="footer">
        <nav class="navegacion container">
            <div class="row text-center">
                <div class="col-sm-3">
                    <a class="anclaLogo navbar-brand linkNav" href="./AP-movies.html">🍕 AP-Movies</a>
                </div>
            </div>
        </nav>
    </footer>
   <script src="./js/valida_simple_registrarse.js"></script>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>

</body>

</html>