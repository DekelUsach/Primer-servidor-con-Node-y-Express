export default {SacarFechaActual, diaNombre, año, dia,month}

function SacarFechaActual(tiempo){
    let tiempoParseado = new Date(tiempo)

    let dia = tiempoParseado.getDate();
    let mes = tiempoParseado.getMonth() + 1;
    let año = tiempoParseado.getFullYear();
    let hora = tiempoParseado.getHours();
    let minutos = tiempoParseado.getMinutes();
    let segundos = tiempoParseado.getSeconds();
    let fechaYHora = 0;
    if (segundos < 10) {
        if (minutos < 10)
            fechaYHora = `${dia}/${mes}/${año} ${hora}:${minutos}:0${segundos}`;
    }
    else {
        fechaYHora = `${dia}/${mes}/${año} ${hora}:${minutos}:${segundos}`;
    }
    return fechaYHora
}

function diaNombre(tiempo){
    let tiempoParseado = new Date(tiempo)

    let dia = tiempoParseado.getDay();
return dia;
}
function año(tiempo){
    let tiempoParseado = new Date(tiempo)
    let año = tiempoParseado.getFullYear();
return año;
}

function dia(tiempo){
    let tiempoParseado = new Date(tiempo)
    let dia = tiempoParseado.getDate();
    return dia;
}


function month(tiempo){
    let tiempoParseado = new Date(tiempo)
    let mes = tiempoParseado.getMonth();
    return mes;
}