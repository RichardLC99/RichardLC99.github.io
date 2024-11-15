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
