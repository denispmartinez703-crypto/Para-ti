document.addEventListener("DOMContentLoaded", () => {
    const universo = document.getElementById('universo');
    const numeroEstrellas = 100;
    const texto = "Para tí.. \n Que iluminas mi mundo❤️";
    let i = 0;

    // --- EFECTO DE ESCRITURA ---
    function escribirTexto() {
        if (i < texto.length) {
            if (texto.charAt(i) === '\n') {
                document.getElementById("texto-escrito").innerHTML += "<br>";
                i++;
            } else {
                document.getElementById("texto-escrito").innerHTML += texto.charAt(i);
                i++;
            }
            setTimeout(escribirTexto, 100);
        } else {
            const btnMagico = document.getElementById('btn-magico');
            btnMagico.classList.add('btn-visible');
        }
    }
    escribirTexto();

    const  datosConstelacion = [
        {
            x: 50, y: 85,
            img: "Imagen/NUM2.jpg",
            p1: "El taekwondo y tú",
            p2: "Desde el primer día en que te pude conocer, fue gracias a este deporte.",
            p3: "y siempre me ha encantado entrenar y competir junto a ti... Te amo mi chiquita❤️"
          }, // Punta abajo

        {
            x: 15, y: 50,
            img: "Imagen/NUM4.jpg",
            p1: "Compañeros de vida",
            p2: "A tu lado siempre.",
            p3: "En esta y en mil vidas siempre te elegiré a ti❤️."
        }, // Extremo izquierdo

        {
            x: 25, y: 20,
            img: "Imagen/NUM3.jpg",
            p1: "Tus Risas",
            p2: "Me dan vida.",
            p3: "Nunca dejes de sonreir, porque es mi motivo de esforzamre en este mundo.."
        }, // Curva arriba izq

        {
            x: 50, y: 40,
            img: "Imagen/NUM6.jpg",
            p1: "Nuestras salidas",
            p2: "Me encanta disfrutar los placeres de la vida contigo.",
            p3: "Tú y yo en Ometepe, ¿Que dices?."
        }, // Pico centro arriba

        {
            x: 75, y: 20,
            img:"Imagen/NUM5.jpg",
            p1: "Mi princesa",
            p2: "Toda elegante y hermosa.",
            p3: "Me cautivas con tu presencia, eres tan hermosa y encantadora AAAAAAAAAA."
        }, // Curva arriba der

        {
            x: 85, y: 50,
            img: "Imagen/NUM8.jpg",
            p1: "Nuestro Futuro",
            p2: "No se que nos prepare el futuro, perooo.",
            p3: "mientras sea contigo, estaré apoyandote, cuidandote y amandote mi amor."
        }, // Extremo derecho

        {
            x: 50, y: 85,
            img: "Imagen/NUM1.jpg",
            p1: "El Inicio",
            p2: "Tu amor es mi base.",
            p3: "Te amo."
        }, // Punta abajo

        // Puedes agregar más puntos aquí

    ];


    const btnMagico = document.getElementById('btn-magico');
    const constelacionContenedor = document.getElementById('constelacion');

    // --- LLUVIA DE METEOROS ---
    function crearMeteoro() {
        const contenedor = document.getElementById('escena-principal');
        const meteoro = document.createElement('div');
        meteoro.classList.add('meteoro');
        meteoro.style.left = Math.random() * 100 + 'vw';
        const duracion = Math.random() * 3 + 2;
        meteoro.style.animationDuration = duracion + 's';
        contenedor.appendChild(meteoro);
        setTimeout(() => { meteoro.remove(); }, duracion * 1000);
    }
    setInterval(crearMeteoro, 300);

    // --- EVENTO BOTÓN MÁGICO ---
    btnMagico.addEventListener('click', () => {
        const mensajeContainer = document.querySelector('.mensaje-inicial');
        mensajeContainer.classList.add('mensaje-saliente');

        setTimeout(() => {
            mensajeContainer.style.display = 'none';
            constelacionContenedor.style.opacity = '0';
            constelacionContenedor.classList.remove('oculto');
            constelacionContenedor.style.display = 'block';

            setTimeout(() => {
                constelacionContenedor.style.transition = 'opacity 3s ease';
                constelacionContenedor.style.opacity = '1';

                const svg = document.getElementById('svg-Lineas');
                svg.innerHTML = '';

                datosConstelacion.forEach((dato, index) => {
                    // Dibujamos las líneas (tu lógica actual)
                    if (index < datosConstelacion.length - 1) {
                        const siguienteDato = datosConstelacion[index + 1];
                        const linea = document.createElementNS("http://www.w3.org/2000/svg", "line");
                        linea.setAttribute("x1", `${dato.x}%`);
                        linea.setAttribute("y1", `${dato.y}%`);
                        linea.setAttribute("x2", `${siguienteDato.x}%`);
                        linea.setAttribute("y2", `${siguienteDato.y}%`);
                        linea.setAttribute("stroke", "#ffffff");
                        linea.setAttribute("stroke-width", "1");
                        linea.setAttribute("stroke-opacity", "0.5");
                        linea.setAttribute("stroke-dasharray", "5,5");
                        svg.appendChild(linea);
                    }
                    
                    // Creamos los puntos
                    const punto = document.createElement('div');
                    punto.className = 'punto-constelacion';
                    punto.style.left = `${dato.x}%`;
                    punto.style.top = `${dato.y}%`;
                    punto.onclick = () => mostrarDetalle(dato);
                    constelacionContenedor.appendChild(punto);
                });

                // --- APARECER EL BOTÓN DEL PORTAL (4 segundos después) ---
                setTimeout(() => {
  const btnPortal = document.getElementById('btn-portal');

  if (btnPortal) {
    // ✅ NO TOCAR display
    // ✅ Solo activar la clase para animar
    requestAnimationFrame(() => {
      btnPortal.classList.add('aparecer-suave');
      console.log("¡El portal se está materializando!");
    });

    btnPortal.onclick = () => {
      window.location.href = "../flower-power-main/flower.html";
    };
  }
}, 4000);

            }, 100); // Cerramos el setTimeout de 100ms
        }, 1500); // Cerramos el setTimeout de 1500ms
    }); // Cerramos el eventListener

    // --- MOSTRAR DETALLES (CORREGIDO) ---
    function mostrarDetalle(dato) {
        const modal = document.getElementById('modal-razon');
        document.getElementById('modal-imagen').src = dato.img;
        document.getElementById('parrafo-1').innerText = dato.p1;
        document.getElementById('parrafo-2').innerText = dato.p2;
        document.getElementById('parrafo-3').innerText = dato.p3;

        modal.style.display = 'flex';
        modal.classList.remove('oculto');

        setTimeout(() => {
            modal.classList.add('activo');
            modal.style.opacity = '1'; // El máximo es 1
        }, 10);
    }

    document.getElementById('cerrar-modal').onclick = function() {
        const modal = document.getElementById('modal-razon');
        modal.classList.remove('activo');
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.add('oculto');
        }, 500);
    }

    // --- ESTRELLAS DE FONDO (RESTAURADAS Y AJUSTADAS) ---
    for (let i = 0; i < numeroEstrellas; i++) {
        const estrella = document.createElement('div');
        estrella.className = 'estrella-fondo';
        
        // Ajustado a 100% para que no se salgan de la pantalla
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const tamaño = Math.random() * 2 + 1;
        
        estrella.style.left = `${x}%`;
        estrella.style.top = `${y}%`;
        estrella.style.width = `${tamaño}px`;
        estrella.style.height = `${tamaño}px`;
        estrella.style.animationDuration = `${Math.random() * 3 + 2}s`;
        estrella.style.animationDelay = `${Math.random() * 5}s`;

        universo.appendChild(estrella);
    }
});