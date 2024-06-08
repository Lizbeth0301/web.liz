document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const message = document.getElementById('message');
    const hiddenMessage = document.getElementById('hiddenMessage');
    const surpriseImage = document.getElementById('surpriseImage');
    
    let clickCount = 0;

    heart.addEventListener('click', () => {
        clickCount++;

        switch (clickCount) {
            case 1:
                message.textContent = "Feliz fiesta del Sagrado Corazón";
                break;
            case 2:
                message.textContent = "Que el Sagrado Corazón de Jesús transforme cada vez más tu corazón hasta que sea perfecto y digno de Él";
                break;
            case 3:
                message.style.display = "none";
                hiddenMessage.style.display = "block";
                surpriseImage.style.display = "block";
                hiddenMessage.textContent = "Oh Dios todopoderoso y eterno, mira el Corazón de tu amantísimo Hijo, las alabanzas y satisfacciones que en nombre de los pecadores te ofrece y concede el perdón a éstos que piden misericordia en el nombre de tu mismo Hijo, Jesucristo, el cual vive y reina contigo por los siglos de los siglos. Amén.";
                break;
            default:
                break;
        }
    });
});
