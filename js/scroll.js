window.addEventListener('scroll', function(){

    let tamañoDePantalla = window.innerHeight;
    //Quienes Somos
    let quienes_somos_subtitulo = this.document.getElementById('qs');
    let posicion_qs_subtitulo = quienes_somos.getBoundingClientRect().top;
    
    let quienes_somos_leyenda = this.document.getElementById('leyenda');
    let posicion_qs_leyenda = quienes_somos.getBoundingClientRect().top;

    let quienes_somos_imagen = this.document.getElementById('imagen_qs');
    let posicion_qs_imagen = quienes_somos.getBoundingClientRect().top;

    if(posicion_qs_subtitulo < tamañoDePantalla){
        quienes_somos_subtitulo.style.animation = 'mover-izquierda 1s ease-out'
    }

    if(posicion_qs_leyenda < tamañoDePantalla){
        quienes_somos_leyenda.style.animation = 'mover-izquierda 1s ease-out'
    }

    if(posicion_qs_imagen < tamañoDePantalla){
        quienes_somos_imagen.style.animation = 'mover-derecha 1s ease-out'
    }
    //Nuestra Programacion
    let programacion_subtitulo = this.document.getElementById('p');
    let posicion_p_subtitulo = programacion_subtitulo.getBoundingClientRect().top;

    let programacion_imagen = this.document.getElementById('imagen_p');
    let posicion_p_imagen = programacion_subtitulo.getBoundingClientRect().top;   

    if(posicion_p_subtitulo < tamañoDePantalla){
        programacion_subtitulo.style.animation = 'mover-derecha 1s ease-out'
    }

    if(posicion_p_imagen < tamañoDePantalla){
        programacion_imagen.style.animation = 'mover-izquierda 1s'
    }

    //Equipo
    let equipo_subtitulo = this.document.getElementById('equipo');
    let posicion_e_subtitulo = equipo_subtitulo.getBoundingClientRect().top;
    if(posicion_e_subtitulo < tamañoDePantalla){
        equipo_subtitulo.style.animation = 'zoom 1s'
    }

    let equipo_cartas = this.document.getElementById('cartas');
    let posicion_e_cartas = equipo_cartas.getBoundingClientRect().top;
    if(posicion_e_cartas < tamañoDePantalla){
        equipo_cartas.style.animation = 'zoom 0.8s'
    }

    //trabajo

    let galeria_subtitulo = this.document.getElementById('trabajo');
    let posicion_g_subtitulo = galeria_subtitulo.getBoundingClientRect().top;
    if(posicion_g_subtitulo < tamañoDePantalla){
        galeria_subtitulo.style.animation = 't-stroke 2s'
    }

    let galeria_imagen = this.document.getElementById('galeria');
    let posicion_g_imagen = galeria_imagen.getBoundingClientRect().top;
    if(posicion_g_imagen < tamañoDePantalla){
        galeria_imagen.style.animation = 'zoom 1s'
    }
    
})