function showMessage(card) {
    var message = card.querySelector('p').innerText;
    var messagePanel = document.getElementById('message-panel');
    var messageContent = document.getElementById('message-content');
    var container = document.querySelector('.container');

    messageContent.innerText = message;
    messagePanel.classList.remove('hidden');

    // Ocultar todas las tarjetas
    var cards = container.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.classList.add('hidden');
    });

    card.classList.remove('hidden'); // Mostrar solo la tarjeta clicada
}

function hideMessage() {
    var messagePanel = document.getElementById('message-panel');
    var container = document.querySelector('.container');

    messagePanel.classList.add('hidden');

    // Mostrar todas las tarjetas
    var cards = container.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.classList.remove('hidden');
    });
}

function showModal(img) {
    var modal = document.getElementById('image-modal');
    var modalImg = document.getElementById('modal-img');

    modal.style.display = "block";
    modalImg.src = img.src;
}

function hideModal() {
    var modal = document.getElementById('image-modal');
    modal.style.display = "none";
}
// Nueva función para mostrar imágenes al pasar el puntero 
function showImagesOnHover() { 
    var images = document.querySelectorAll('.image-container img'); 
    images.forEach(function(img) { 
        img.addEventListener('mouseenter', function() { 
            img.style.opacity = '1'; 
        }); 
            img.addEventListener('mouseleave', function() { 
                img.style.opacity = '0'; 
        });
    }); 
} // Llamada a la función para mostrar imágenes al pasar el puntero al cargar la página 
showImagesOnHover();

function createHeart() { 
    const heartsContainer = document.getElementById('hearts-container'); 
    const heart = document.createElement('div'); 
    heart.classList.add('heart-bubble'); 
    heart.style.left = `${Math.random() * 100}%`; 
    heartsContainer.appendChild(heart); 
    
    setTimeout(() => { 
        heart.remove(); 
    }, 5000); 
} 
setInterval(createHeart, 500);

// Crear y animar corazones flotantes 
function animateHearts() {
     var hearts = document.querySelectorAll('.floating-hearts .heart'); 
     hearts.forEach(function(heart) { 
        heart.style.top = `${Math.random() * 100}vh`; 
        heart.style.left = `${Math.random() * 100}vw`; 
    }); 
} 
setInterval(animateHearts, 10000); // Actualizar la posición de los corazones cada 10 segundos