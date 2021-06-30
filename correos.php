<?php
    $destinatario = 'radioimpactogda@yahoo.es'; 
    //esto es al correo al que se enviara el mensaje
    $nombre = $_POST['nombre'];
    $mensaje = $_POST['mensaje'];
    $email = $_POST['email'];

    $header = "Enviado desde la pagina web de Radio Impacto";
    $mensajeCompleto = "\nMensaje: " . $mensaje . "\nAtentamente: " . $nombre . "\nCorreo: " . $email;

    mail($destinatario, $header, $mensajeCompleto);
    echo "<script>alert('Mensaje Enviado exitosamente')</script>";
    echo "<script> setTimeout(\"location.href='https://nesch99.github.io/impacto999/'\",1000)</script>";
?>

