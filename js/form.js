var btnShowModal = document.getElementById('btnShowModal');
var btnHideModal = document.querySelector('.modal-feedback button[data-role="closing"]');
var modalFeedback = document.querySelector('.modal-feedback');
var modalOverlay = document.querySelector('.modal-overlay');
var form = document.querySelector('.modal-feedback form');

var fieldName = document.querySelector('.modal-feedback input[name="name"]');
var fieldEmail = document.querySelector('.modal-feedback input[name="email"]');
var fieldMsg = document.querySelector('.modal-feedback textarea[name="message"]');

function hideFeedbackForm() {
    modalOverlay.classList.remove('show');
    modalFeedback.classList.remove('show');
    var inputs = form.querySelectorAll('.error');
    for(var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('error');
    }
}

function showFeedbackForm() {
    modalOverlay.classList.add('show');
    modalFeedback.classList.add('show');
    getLocalStorageValues();
    if(!fieldName.value) {
        fieldName.focus();
    } else {
        fieldMsg.focus();
    }
}

function setLocalStorage() {
    localStorage.setItem('userName', fieldName.value);
    localStorage.setItem('userEmail', fieldEmail.value);
}

function getLocalStorageValues() {
    fieldName.value = localStorage.getItem('userName');
    fieldEmail.value = localStorage.getItem('userEmail');
}

btnShowModal.addEventListener('click', function(e){
    e.preventDefault();
    showFeedbackForm();
});

btnHideModal.addEventListener('click', function(e){
    e.preventDefault();
    hideFeedbackForm();
});

modalOverlay.addEventListener('click', function(e){
    e.preventDefault();
    hideFeedbackForm();
});

window.addEventListener('keydown', function(e){
    if(e.keyCode === 27) {
        hideFeedbackForm();
    }
});

form.addEventListener('submit', function(e) {
    var hasErrors = false;
    if(!fieldName.value){
        e.preventDefault();
        fieldName.classList.add('error');
        hasErrors = true;
    } else {
        fieldName.classList.remove('error');
    }

    if(!fieldEmail.value) {
        e.preventDefault();
        fieldEmail.classList.add('error');
        hasErrors = true;
    } else {
        fieldEmail.classList.remove('error');
    }

    if(!fieldMsg.value) {
        e.preventDefault();
        fieldMsg.classList.add('error');
        hasErrors = true;
    } else {
        fieldMsg.classList.remove('error');
    }

    if(!hasErrors){
        setLocalStorage();
    }
});

