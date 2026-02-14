onload = () => {
    // 1. Quitar la animación de carga (tu código original)
    document.body.classList.remove("container");

    // 2. Lógica de la música
    const musica = document.getElementById('cancion-fondo');

    if (musica) {
        // Intentamos reproducir de inmediato
        musica.play().then(() => {
            console.log("Reproducción iniciada correctamente.");
        }).catch(error => {
            console.log("Autoplay bloqueado. Esperando interacción...");
            
            // Si el navegador bloquea el audio, se activará al primer toque en la pantalla
            document.body.addEventListener('click', () => {
                musica.play();
            }, { once: true });
        });
    }
};