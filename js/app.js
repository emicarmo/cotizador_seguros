let fmPropiedad
let fmUbicacion
const costoM2 = 1.16

const selectPropiedad = document.querySelector("select#propiedad")
const selectUbicacion = document.querySelector("select#ubicacion")
const inputMetros2 = document.querySelector("input#metros2")
const btnCotizar = document.querySelector("button.button.button-outline")
const divPrincipal = document.querySelector("div.div-quote")
const spanPoliza = document.querySelector("span#valorPoliza")

function cargarComboPropiedad() {
    let opcionPropiedad
    for (let propiedad of datosPropiedad) {
        opcionPropiedad += "<option>" + propiedad.tipo + "</option>"
    }
    selectPropiedad.innerHTML = opcionPropiedad
}

function cargarComboUbicacion() {
    let opcionUbicacion
    for (let ubicacion of datosUbicacion) {
        opcionUbicacion += "<option>" + ubicacion.tipo + "</option>"
    }
    selectUbicacion.innerHTML = opcionUbicacion
}

function obtenerFMPropiedad() {
    if (selectPropiedad.value !== '') {
        for (propiedad of datosPropiedad) {
            if (propiedad.tipo === selectPropiedad.value) {
                return propiedad.factor
            }
        }
    }
}

function obtenerFMUbicacion() {
    if (selectUbicacion.value !== '') {
        for (ubicacion of datosUbicacion) {
            if (ubicacion.tipo === selectUbicacion.value) {
                return ubicacion.factor
            }
        }
    }
}

btnCotizar.onclick = function () {
    divPrincipal.classList.add("div-blocked")
    btnCotizar.innerHTML = '<img src="images/animation.gif">'
    
    setTimeout(() => {
        if (obtenerFMPropiedad() && obtenerFMUbicacion() && parseInt(metros2.value)) {
            let resultado = obtenerFMPropiedad() * obtenerFMUbicacion() * parseInt(metros2.value) * costoM2
            spanPoliza.textContent = resultado.toFixed(2)
        } else {
            console.warn("Hubo un error en los datos ingresados.")
        }
        divPrincipal.classList.remove("div-blocked")
        btnCotizar.textContent = 'cotizar'
    }, 3500)
}

cargarComboPropiedad()
cargarComboUbicacion()