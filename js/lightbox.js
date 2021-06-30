const imagenes = document.querySelectorAll('.img-programacion')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburguer');


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        var source = imagen.getAttribute('src')
        aparecerImagen(source.substr(0,23) + "B.png")
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imageneslight){
        contenedorLight.classList.toggle('show')
        imageneslight.classList.toggle('showImage')
        hamburguer1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    imageneslight.src = imagen
    contenedorLight.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
}

//Historia

const imagenesLeyenda = document.querySelectorAll('.imagen-leyenda')
const imageneslightHistoria = document.querySelector('.agregar-imagen-historia')

 imagenesLeyenda.forEach(imagen =>{
     imagen.addEventListener('click', ()=>{
        var source = imagen.getAttribute('src')
        aparecerImagen(source.substr(0,23) + "B.jpg")
     })
 })