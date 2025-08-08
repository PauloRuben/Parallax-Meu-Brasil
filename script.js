    const texto = document.querySelector('.TEXTO');
    const ACUCA = document.querySelector('.ACUCA');
    const MAR = document.querySelector('.MAR');
    const BRASILIA = document.querySelector('.BRASILIA');
    const imagens = document.querySelectorAll('.imagem-estilizada');        
    const cristo = document.querySelector(".CRISTO");
    const monumento = document.querySelector(".MONUMENTO");


    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        if (texto) {
            texto.style.transform = `translateY(${value * 1}px)`;
        }
        if (ACUCA) {
            ACUCA.style.transform = `translateY(${value * 0.1}px)`;
        }

        // Movimento vertical (efeito parallax)
        const cristoTop = 10 + scrollY * 0.1; // sobe devagar
        const monumentoTop = 20 + scrollY * 0.1;

        cristo.style.top = `${cristoTop}%`;
        monumento.style.top = `${monumentoTop}%`;

        // Movimento lateral (Cristo vai para a direita, Monumento para a esquerda)
        const cristoLeft = -5 + scrollY * 0.3;  // aumenta valor → direita
        const monumentoRight = 0 + scrollY * 0.3; // aumenta valor → esquerda

        cristo.style.left = `${cristoLeft}%`;
        monumento.style.right = `${monumentoRight}%`;

        // Rotação adicional (opcional)
        cristo.style.transform = `rotate(${20 + scrollY * 1}deg)`;
        monumento.style.transform = `rotate(${-20 - scrollY * 1}deg)`;
        
    });

