// scripts.js
function mostrarCarta(tipo) {
    const cartas = {
        aburrida: "Hola, Karencita hermosa. Sé que estás aburrida, juguemos Frifayer o hagamos llamada ❤️",
        triste: "Lamento que te sientas así. Quiero que sepas que aquí estoy para ti, y aunque no puedo abrazarte físicamente ahora, siempre puedes contar conmigo. Eres increíble, nunca lo olvides.",
        enojadaConmigo: "Sé que he cometido errores y lo lamento. Mi intención nunca es lastimarte. Te prometo que haré lo mejor para que te sientas amada y comprendida. Hablame y dime lo que te molesta para que lo pueda solucionar.",
        molestaConFamilia: "Entiendo que las cosas con la familia pueden ser difíciles a veces. Tómate tu tiempo y recuerda que está bien sentir lo que sientes. Estoy contigo.",
        motivarte: "Eres capaz de lograr todo lo que te propongas. Hoy puede ser difícil, pero recuerda todas las veces que has superado cosas complicadas. ¡Tú puedes, yo creo en ti! 💪",
        feliz: "Me encanta verte feliz, tu sonrisa me ilumina. Sigue brillando como lo haces siempre. Eres mi sol.☀️",
        recuerdasAmor: "Te quiero más de lo que las palabras pueden expresar. Cada día contigo es un regalo y siempre quiero que recuerdes eso.",
        abrazo: "Cierra los ojos e imagina que te estoy abrazando fuerte. Estoy aquí, contigo, en pensamiento y corazón. ❤️"
    };

    document.getElementById("contenidoCarta").innerText = cartas[tipo];
    document.getElementById("modalCarta").style.display = "block";
}

function cerrarCarta() {
    document.getElementById("modalCarta").style.display = "none";
}
